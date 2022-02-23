/** 进程工具 **/
import { execSync } from "child_process";

/**
 * @name 运行命令
 * @param {string} [cmd="node -v"] 命令行
 */
function RunCmd(cmd: string = "node -v"): string {
	return execSync(cmd, { encoding: "utf8" });
}

export {
	RunCmd
};