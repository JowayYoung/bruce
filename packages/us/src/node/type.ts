/** 类型工具 **/
import { release, type } from "os";

import { RunCmd } from "./process";

interface SystemObj {
	[key: string]: RegExp
}

interface NodeObj {
	nodeVs: string
	npmVs: string
	system: string
	systemVs: string
}

/**
 * @name Node类型
 */
function NodeType(): NodeObj {
	const info = type().toLocaleLowerCase();
	const testUa = (regexp: RegExp): boolean => regexp.test(info);
	/* eslint-disable sort-keys */
	const systemMap: SystemObj = {
		windows: /windows/g, // windows系统
		macos: /darwin/g, // macos系统
		linux: /linux/g // linux系统
	};
	/* eslint-enable */
	const system = Object.keys(systemMap).find(v => testUa(systemMap[v])) ?? "unknow";
	return {
		nodeVs: RunCmd("node -v").replace(/(v|\n|\r\n)/g, ""),
		npmVs: RunCmd("npm -v").replace(/\n/g, ""),
		system,
		systemVs: release().split("-")[0]
	};
}

export {
	NodeType
};