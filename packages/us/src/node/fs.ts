/** 文件工具 **/
import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { extname, join } from "path";
import { cwd } from "process";
import { copySync, ensureDirSync, removeSync } from "fs-extra";
import Yaml from "yaml";

/**
 * @name 绝对路径
 * @param {string} [path=""] 路径
 * @param {string} [dir=cwd()] 上下文
 */
function AbsPath(path: string = "", dir: string = cwd()): string {
	// const __dirname = dirname(fileURLToPath(import.meta.url)); 在使用该函数的文件里直接获取__dirname
	return join(dir, path);
}

/**
 * @name 检查路径
 * @param {string} [path=""] 路径
 * @param {string} [dir=cwd()] 上下文
 */
function CheckPath(path: string = "", dir: string = cwd()): boolean {
	return existsSync(AbsPath(path, dir));
}

/**
 * @name 复制文件路径
 * @param {function} [filter] 过滤函数(返回true表示复制，返回false表示不复制)
 * @param {string} [dist=""] 输出路径
 * @param {string} [src=""] 输入路径
 */
interface CopyDirType {
	dist: string
	filter?: (src: string, dist: string) => boolean
	src: string
}

function CopyDir({
	dist = "",
	filter,
	src = ""
}: CopyDirType): void {
	copySync(src, dist, { filter });
}

/**
 * @name 创建文件路径
 * @param {string} [dir=""] 路径
 */
function CreateDir(dir: string = ""): void {
	ensureDirSync(dir);
}

/**
 * @name 读取文件路径
 * @param {string} [dir=""] 路径
 * @param {regexp} [regexp=/(node_modules|\.git|\.DS_Store)$/] 过滤正则
 * @param {string} [type="bfs"] 类型：bfs、dfs
 */
interface ReadDirType {
	dir: string
	regexp?: RegExp
	type?: "bfs" | "dfs"
}

function ReadDir({
	dir = cwd(),
	regexp = /(node_modules|\.git|\.DS_Store)$/,
	type = "bfs"
}: ReadDirType): string[] {
	if (type === "bfs") {
		const paths = [];
		const queue = [];
		!regexp.test(dir) && queue.unshift(dir);
		while (queue.length) {
			const topPath = queue.shift() ?? "";
			const stat = statSync(topPath);
			if (stat && !regexp.test(topPath)) {
				const { isDirectory, isFile } = stat;
				if (isDirectory()) {
					readdirSync(topPath).forEach(v => {
						const spath = join(topPath, v);
						queue.push(spath);
					});
				} else if (isFile()) {
					paths.push(topPath);
				}
			}
		}
		return paths;
	} else if (type === "dfs") {
		const paths: string[] = [];
		const stat = statSync(dir);
		if (!regexp.test(dir)) {
			if (stat.isDirectory()) {
				readdirSync(dir).reduce((t, v) => {
					const spath = join(dir, v);
					const spaths = ReadDir({
						dir: spath,
						regexp,
						type: "dfs"
					});
					t.push(...spaths);
					return t;
				}, paths);
			} else if (stat.isFile()) {
				paths.push(dir);
			}
		}
		return paths;
	} else {
		return [];
	}
}

/**
 * @name 读取JSON文件
 * @param {string} [path=""] 路径
 * @param {string} [dir=cwd()] 上下文
 */
function ReadJson(path: string = "", dir: string = cwd()): object {
	const _path = AbsPath(path, dir);
	const ext = extname(_path);
	if (!/^\.json$/.test(ext)) return {};
	const text = readFileSync(_path, "utf8");
	return JSON.parse(text);
}

/**
 * @name 读取YAML文件
 * @param {string} [path=""] 路径
 * @param {string} [dir=cwd()] 上下文
 */
function ReadYaml(path: string = "", dir: string = cwd()): object {
	const _path = AbsPath(path, dir);
	const ext = extname(_path);
	if (!/^\.ya?ml$/.test(ext)) return {};
	const text = readFileSync(_path, "utf8");
	return Yaml.parse(text);
}

/**
 * @name 删除文件路径
 * @param {string} [dir=""] 路径
 */
function RemoveDir(dir: string = ""): void {
	removeSync(dir);
}

export {
	AbsPath,
	CheckPath,
	CopyDir,
	CreateDir,
	ReadDir,
	ReadJson,
	ReadYaml,
	RemoveDir
};