import Inquirer from "inquirer";

import { QUESTION_TEXT } from "../../i18n/index.js";

const { prompt } = Inquirer;

const QT_LOCALE = {
	choices: [
		{ name: "简体中文", value: "zh-chs" },
		{ name: "繁體中文", value: "zh-cht" },
		{ name: "English", value: "en" }
	],
	default: 0,
	message: QUESTION_TEXT.locale,
	name: "locale",
	type: "list"
};

export default async function() {
	const { locale } = await prompt(QT_LOCALE);
	return locale;
}