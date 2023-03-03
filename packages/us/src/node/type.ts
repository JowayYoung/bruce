/** 类型工具 **/
import { release, type } from "os";

import { RunCmd } from "./process";

/**
 * @name Node类型
 */
type SystemOpts = "windows" | "macos" | "linux";

type SystemType = Record<SystemOpts, RegExp>;

interface InfoType {
	nodeVs: string
	npmVs: string
	system: SystemOpts
	systemVs: string
}

function NodeType(): InfoType {
	const info = type().toLocaleLowerCase();
	const testUa = (regexp: RegExp): boolean => regexp.test(info);
	/* eslint-disable sort-keys */
	const systemMap: SystemType = {
		windows: /windows/g,
		macos: /darwin/g,
		linux: /linux/g
	};
	/* eslint-enable */
	const system = Object.keys(systemMap).find(v => testUa(systemMap[v as SystemOpts])) as SystemOpts;
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