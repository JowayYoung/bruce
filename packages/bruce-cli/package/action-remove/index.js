import { promisify } from "util";
import Ora from "ora";
import Rimraf from "rimraf";

import { REMOVE_TEXT } from "../../i18n/index.js";
import { AbsPath, ShowMsg, ShowTitle } from "../../util/setting.js";

export default async function() {
	ShowTitle("remove");
	const distP = AbsPath("dist");
	const nodeModulesP = AbsPath("node_modules");
	const packageLockP = AbsPath("package-lock.json");
	const yarnLockP = AbsPath("yarn.lock");
	const rimraf = promisify(Rimraf);
	const spinner = Ora(REMOVE_TEXT.removing).start();
	await rimraf(distP);
	await rimraf(nodeModulesP);
	await rimraf(packageLockP);
	await rimraf(yarnLockP);
	spinner.stop();
	ShowMsg("green", REMOVE_TEXT.removed);
	process.exit(1);
}