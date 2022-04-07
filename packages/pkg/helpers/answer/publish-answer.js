import { AsyncTo } from "@yangzw/bruce-us/dist/node.js";
import { Listr } from "listr2";

import { CHECK_AUTH, CHECK_DEPS, CHECK_ENV, CHECK_PUBLISH } from "../question/index.js";

export default async function PublishAnswer() {
	const tasks = new Listr([
		CHECK_ENV,
		CHECK_DEPS,
		CHECK_AUTH,
		CHECK_PUBLISH
	], {
		concurrent: false,
		rendererOptions: { collapse: false }
	});
	const res = await AsyncTo(tasks.run());
	return res;
}