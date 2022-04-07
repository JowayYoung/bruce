const COMPRESS_EXTS = [
	"jpg",
	"jpeg",
	"png",
	"JPG",
	"JPEG",
	"PNG"
];

const GROUP_TEST = {
	type(val = "format") {
		return ["format", "size", "volume"].includes(val) ? val : "format";
	}
};

const MARK_REGEXP = {
	color: /^(#[0-9a-f]{3}|#[0-9a-f]{6}|rgba\([\d]{1,3},[\d]{1,3},[\d]{1,3}(,(0\.[\d]{1,2}|1))?\))$/,
	left: /^(0|([1-9]\d*))$/,
	size: /^([1-9]\d*)$/,
	text: /^[\w\s\u4e00-\u9fa5-]{1,50}$/,
	top: /^(0|([1-9]\d*))$/
};

const OUTPUT_DIR = {
	compress: "#compress-dist#",
	group: "#group-dist#",
	mark: "#mark-dist#",
	transform: "#transform-dist#"
};

const TINYIMG_URL = [
	"tinyjpg.com",
	"tinypng.com"
];

const TRANSFORM_REGEXP = {
	blur: /^(0|(\d+))(\.\d+)?$/,
	extract: /^[\d]{1,},[\d]{1,},[\d]{1,},[\d]{1,}$/,
	flip: /^true$/,
	flop: /^true$/,
	format: /^(jpg|png)$/,
	grayscale: /^true$/,
	negate: /^true$/,
	normalise: /^true$/,
	resize: /^[\d]{1,},[\d]{1,}(,(cover|contain|fill|inside|outside))?$/,
	rotate: /^-?[\d]{1,}(,(transparent|#[0-9a-f]{3}|#[0-9a-f]{6}|rgba\([\d]{1,3},[\d]{1,3},[\d]{1,3}(,(0\.[\d]{1,2}|1))?\)))?$/,
	sharpen: /^true$|^((0|(\d+))(\.\d+)?)(,(0|(\d+))(\.\d+)?)?(,(0|(\d+))(\.\d+)?)?$/
};

const TRANSFORM_TEST = {
	blur(val = "") {
		return TRANSFORM_REGEXP.blur.test(val) && +val >= 0.3 && +val <= 1000 ? +val : "";
	},
	extract(val = "") {
		if (!TRANSFORM_REGEXP.extract.test(val)) return "";
		const [left, top, width, height] = val.split(",").map(v => +v);
		return { height, left, top, width };
	},
	flip(val = "") {
		return TRANSFORM_REGEXP.flip.test(val) ? true : "";
	},
	flop(val = "") {
		return TRANSFORM_REGEXP.flop.test(val) ? true : "";
	},
	format(val = "") {
		return TRANSFORM_REGEXP.format.test(val) ? val : "";
	},
	grayscale(val = "") {
		return TRANSFORM_REGEXP.grayscale.test(val) ? true : "";
	},
	negate(val = "") {
		return TRANSFORM_REGEXP.negate.test(val) ? true : "";
	},
	normalise(val = "") {
		return TRANSFORM_REGEXP.normalise.test(val) ? true : "";
	},
	resize(val = "") {
		if (!TRANSFORM_REGEXP.resize.test(val)) return "";
		const [width, height, fit = "cover"] = val.split(",").map(v => +v);
		return {
			fit,
			height: height === 0 ? null : +height,
			width: width === 0 ? null : +width
		};
	},
	rotate(val = "") {
		if (!TRANSFORM_REGEXP.rotate.test(val)) return "";
		const [angle, bgcolor = "#fff"] = val.split(",");
		return [+angle, { background: bgcolor }];
	},
	sharpen(val = "") {
		if (!TRANSFORM_REGEXP.sharpen.test(val)) return "";
		if (val === "true") return "true";
		const [sigama, flat = 1, jagged = 2] = val.split(",").map(v => +v);
		if (sigama < 0.3 || sigama > 1000 || !flat || !jagged) return "";
		return [sigama, flat, jagged];
	}
};

const VOLUME_RANGE = {
	big: 1024 * 100,
	small: 1024 * 10
};

export {
	COMPRESS_EXTS,
	GROUP_TEST,
	MARK_REGEXP,
	OUTPUT_DIR,
	TINYIMG_URL,
	TRANSFORM_REGEXP,
	TRANSFORM_TEST,
	VOLUME_RANGE
};