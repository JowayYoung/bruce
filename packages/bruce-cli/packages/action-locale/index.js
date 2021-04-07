import { readFileSync, writeFileSync } from "fs";

import { LOCALE_TEXT } from "../../languages/index.js";
import LocaleAnswer from "../locale-answer/index.js";
import { AbsPath, ShowMsg, ShowTitle } from "../../utils/setting.js";

export default async function() {
	ShowTitle("locale");
	const LOCALE = await LocaleAnswer();
	const i18nP = AbsPath("../languages/index.js", 1);
	const i18nSC = readFileSync(i18nP, "utf8");
	const i18nDC = i18nSC.replace(/"(.+?)"/, `"./${LOCALE}.js"`);
	writeFileSync(i18nP, i18nDC, "utf8");
	ShowMsg("green", LOCALE_TEXT.localed);
	process.exit(1);
};