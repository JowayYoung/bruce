/** 文件工具 **/
import Fs from "fs";
import Path from "path";
import CopyPasteDir from "copy-dir";
import MakeDir from "make-dir";
import Rimfaf from "rimraf";

/**
 * @name 复制文件路径
 * @param {string} [src=""] 输入路径
 * @param {string} [dist=""] 输出路径
 * @param {function} [filter=false] 过滤函数(返回函数表示过滤规则，返回false表示不复制)
 */
function CopyDir(src = "", dist = "", filter = false) {
	CopyPasteDir.sync(src, dist, {
		cover: true,
		filter,
		mode: true,
		utimes: true
	});
}

/**
 * @name 创建文件路径
 * @param {string} [dir=""] 路径
 */
function CreateDir(dir = "") {
	!Fs.existsSync(dir) && MakeDir.sync(dir);
}

/**
 * @name BFS读取文件(广度优先遍历)
 * @param {string} [dir=""] 路径
 * @param {regexp} [igonre=/(node_modules|\.git|\.DS_Store)$/] 忽略文件正则
 */
function ReadFileForBFS(path = process.cwd(), igonre = /(node_modules|\.git|\.DS_Store)$/) {
	const paths = [];
	const queue = [];
	!igonre.test(path) && queue.unshift(path);
	while (queue.length) {
		const topPath = queue.shift();
		const stat = Fs.statSync(topPath);
		if (!igonre.test(topPath)) {
			if (stat.isDirectory()) {
				Fs.readdirSync(topPath).forEach(v => {
					const spath = Path.join(topPath, v);
					queue.push(spath);
				});
			} else if (stat.isFile()) {
				paths.push(topPath);
			}
		}
	}
	return paths;
}

/**
 * @name DFS读取文件(深度优先遍历)
 * @param {string} [dir=""] 路径
 * @param {regexp} [igonre=""] 忽略文件正则
 */
function ReadFileForDFS(path = process.cwd(), igonre = /(node_modules|\.git|\.DS_Store)$/) {
	const paths = [];
	const stat = Fs.statSync(path);
	if (!igonre.test(path)) {
		if (stat.isDirectory()) {
			Fs.readdirSync(path).reduce((t, v) => {
				const spath = Path.join(path, v);
				const spaths = ReadFileForDFS(spath, igonre);
				t.push(...spaths);
				return t;
			}, paths);
		} else if (stat.isFile()) {
			paths.push(path);
		}
	}
	return paths;
}

/**
 * @name 删除文件路径
 * @param {string} [dir=""] 路径
 */
function RemoveDir(dir = "") {
	Rimfaf.sync(dir);
}

export {
	CopyDir,
	CreateDir,
	ReadFileForBFS,
	ReadFileForDFS,
	RemoveDir
};

export default {
	CopyDir,
	CreateDir,
	ReadFileForBFS,
	ReadFileForDFS,
	RemoveDir
};