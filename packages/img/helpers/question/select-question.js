import Chalk from "chalk";

import { QA_CHECK_TEXT, QA_MSG_TEXT } from "../../constants/i18n/index.js";
import { MARK_REGEXP } from "../../constants/util/index.js";

const { redBright } = Chalk;

const MARK_BLEND = {
	choices: QA_MSG_TEXT.markBlendList,
	default: "over",
	message: QA_MSG_TEXT.markBlend,
	name: "markBlend",
	type: "list"
};

const MARK_COLOR = {
	default: "#000",
	message: QA_MSG_TEXT.markColor,
	name: "markColor",
	type: "input",
	validate: val => MARK_REGEXP.color.test(val) ? true : redBright(QA_CHECK_TEXT.markColor)
};

const MARK_LEFT = {
	default: "10",
	message: QA_MSG_TEXT.markLeft,
	name: "markLeft",
	type: "input",
	validate: val => MARK_REGEXP.left.test(val) ? true : redBright(QA_CHECK_TEXT.markLeft)
};

const MARK_POSITION = {
	choices: QA_MSG_TEXT.markPositionList,
	default: "none",
	message: QA_MSG_TEXT.markPosition,
	name: "markPosition",
	type: "list"
};

const MARK_SIZE = {
	default: "20",
	message: QA_MSG_TEXT.markSize,
	name: "markSize",
	type: "input",
	validate: val => MARK_REGEXP.size.test(val) ? true : redBright(QA_CHECK_TEXT.markSize)
};

const MARK_TEXT = {
	default: "JowayYoung",
	message: QA_MSG_TEXT.markText,
	name: "markText",
	type: "input",
	validate: val => MARK_REGEXP.text.test(val) ? true : redBright(QA_CHECK_TEXT.markText)
};

const MARK_TOP = {
	default: "10",
	message: QA_MSG_TEXT.markTop,
	name: "markTop",
	type: "input",
	validate: val => MARK_REGEXP.top.test(val) ? true : redBright(QA_CHECK_TEXT.markTop)
};

export {
	MARK_BLEND,
	MARK_COLOR,
	MARK_LEFT,
	MARK_POSITION,
	MARK_SIZE,
	MARK_TEXT,
	MARK_TOP
};