import { writeFileSync } from "fs";
import { exit } from "process";
import { CreateDir, RunCmd, WaitFor } from "@yangzw/bruce-us/dist/node.js";
import Ora from "ora";

import { CREATE_TEXT } from "../constants/i18n/index.js";
import { ShowMsg, ShowTitle } from "../constants/util/index.js";
import { CreateAnswer } from "../helpers/answer/index.js";

export default async function Create() {
	ShowTitle("create");
	const { name, scope } = await CreateAnswer();
	const pkg = scope ? `@${scope}/${name}` : name;
	try {
		RunCmd(`npm view ${pkg} version`);
		ShowMsg("yellow", CREATE_TEXT.judgeInvalid(pkg));
		exit(1);
	} catch {
		ShowMsg("yellow", CREATE_TEXT.judgeValid(pkg));
		const spinner = Ora(CREATE_TEXT.doing).start();
		CreateDir(name);
		const json = Object.assign({
		/* eslint-disable sort-keys */
			name: pkg,
			version: "1.0.0",
			description: "",
			keywords: [],
			author: {
				name: "",
				phone: "",
				email: ""
			},
			homepage: "",
			repository: {
				type: "git",
				url: ""
			},
			license: "MIT",
			main: "index.js",
			scripts: {
				remove: "rimraf dist node_modules package-lock.json yarn.lock",
				test: "node index.js"
			},
			engines: {
				node: ">=16.0.0",
				npm: ">=7.10.0"
			},
			dependencies: {},
			devDependencies: {}
		/* eslint-enable */
		}, scope ? {
			publishConfig: { access: "public" }
		} : {});
		const pkgText = JSON.stringify(json, null, "\t");
		const indexText = "const name = \"JowayYoung\";\nconsole.log(\"Hello\", name);";
		writeFileSync(`${name}/package.json`, pkgText, "utf8");
		writeFileSync(`${name}/index.js`, indexText, "utf8");
		await WaitFor(2000);
		spinner.stop();
		ShowMsg("green", CREATE_TEXT.done);
		exit(1);
	}
}