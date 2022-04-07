import Inquirer from "inquirer";

import {
	MARK_BLEND,
	MARK_COLOR,
	MARK_LEFT,
	MARK_POSITION,
	MARK_SIZE,
	MARK_TEXT,
	MARK_TOP
} from "../question/index.js";

const { prompt } = Inquirer;

export default async function MarkAnswer() {
	const question1 = [
		MARK_TEXT,
		MARK_SIZE,
		MARK_COLOR,
		MARK_BLEND,
		MARK_POSITION
	];
	const question2 = [
		MARK_LEFT,
		MARK_TOP
	];
	const answer1 = await prompt(question1);
	const answer2 = answer1.markPosition === "none"
		? await prompt(question2)
		: {};
	return { ...answer1, ...answer2 };
}