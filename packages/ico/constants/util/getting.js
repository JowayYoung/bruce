import { existsSync } from "fs";

const DATA_REGEXP = {
	color: /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|white/ig,
	img: /\.(jpe?g|png|gif|webp)$/
};

const OPTS_TEST = {
	src(val = "") {
		return existsSync(val) ? val : "";
	},
	watch(val = "") {
		return /^true$/.test(val) ? true : "";
	}
};

export {
	DATA_REGEXP,
	OPTS_TEST
};