import { existsSync } from "fs";
import { AbsPath } from "@yangzw/bruce-us/dist/node.js";
import Chalk from "chalk";

import { QA_CHECK_TEXT, QA_MSG_TEXT } from "../../constants/i18n/index.js";
import { REGEXP } from "../../constants/util/index.js";

const { redBright } = Chalk;

const NAME = {
	default: "demo",
	message: QA_MSG_TEXT.name,
	name: "name",
	type: "input",
	validate(val) {
		if (!REGEXP.name.test(val)) {
			return redBright(QA_CHECK_TEXT.name);
		} else if (existsSync(AbsPath(`/${val}`))) {
			return redBright(QA_CHECK_TEXT.path);
		} else {
			return true;
		}
	}
};

const SCOPE = {
	default: "",
	message: QA_MSG_TEXT.scope,
	name: "scope",
	type: "input",
	validate: val => val && !REGEXP.scope.test(val) ? redBright(QA_CHECK_TEXT.scope) : true
};

export {
	NAME,
	SCOPE
};