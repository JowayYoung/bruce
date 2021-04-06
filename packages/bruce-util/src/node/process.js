/** 进程工具 **/
import ChildProcess from "child_process";

/**
 * @name 运行命令
 * @param {string} [cmd="node -v"] 命令行
 */
function RunCmd(cmd = "node -v") {
	return ChildProcess.execSync(cmd, { encoding: "utf8" });
};

export {
	RunCmd
};

export default {
	RunCmd
};