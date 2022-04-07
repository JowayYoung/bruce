import { exit } from "process";
import { ReadJson } from "@yangzw/bruce-us/dist/node.js";

import { PUBLISH_TEXT } from "../constants/i18n/index.js";
import { ShowMsg, ShowTitle } from "../constants/util/index.js";
import { PublishAnswer } from "../helpers/answer/index.js";

export default async function Publish() {
	ShowTitle("publish");
	const [err, res] = await PublishAnswer();
	if (err || !res) {
		ShowMsg("red", PUBLISH_TEXT.undone);
	} else {
		const { name, version } = ReadJson("package.json");
		ShowMsg("green", PUBLISH_TEXT.done(name, version));
		ShowMsg("yellow", PUBLISH_TEXT.warning);
	}
	exit(1);
}