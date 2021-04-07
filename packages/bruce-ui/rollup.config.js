import BabelPlugin from "@rollup/plugin-babel";
import CommonjsPlugin from "@rollup/plugin-commonjs";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import ReplacePlugin from "@rollup/plugin-replace";
import PostcssPlugin from "rollup-plugin-postcss";
import { terser as TerserPlugin } from "rollup-plugin-terser";
import PostcssBase64 from "postcss-base64";
import PostcssImport from "postcss-import";
import PostcssPresetEnv from "postcss-preset-env";

const EXTERNALS = [
	"prop-types",
	"react",
	"react-dom"
];

const GLOBALS = {
	"prop-types": "PropTypes",
	react: "React",
	"react-dom": "ReactDom"
};

const PLUGINS = [
	PostcssPlugin({
		extensions: [".css", ".scss"],
		extract: "index.css",
		minimize: true,
		plugins: [
			PostcssBase64({
				extensions: [".jpg", ".png"],
				root: "src/components/*"
			}),
			PostcssImport(),
			PostcssPresetEnv({
				browsers: [
					"last 20 Chrome versions",
					"last 20 Firefox versions",
					"last 20 Opera versions",
					"Explorer >= 10",
					"Safari >= 8",
					"Android >= 5",
					"iOS >= 8"
				]
			})
		]
	}),
	NodeResolvePlugin(),
	CommonjsPlugin(),
	BabelPlugin({
		babelHelpers: "runtime",
		compact: false,
		plugins: [
			["@babel/plugin-transform-runtime", { regenerator: true, useESModules: true }]
		],
		presets: [
			"@babel/preset-env",
			"@babel/preset-react"
		]
	}),
	ReplacePlugin({
		preventAssignment: true,
		values: { "process.env.NODE_ENV": JSON.stringify("production") }
	}),
	TerserPlugin()
];

export default [{
	external: EXTERNALS,
	input: "src/index.js",
	output: {
		file: "dist/index.js",
		format: "cjs",
		globals: GLOBALS
	},
	plugins: PLUGINS
}, {
	external: EXTERNALS,
	input: "src/index.js",
	output: {
		file: "dist/index.esm.js",
		format: "esm",
		globals: GLOBALS
	},
	plugins: PLUGINS
}, {
	input: "src/index.umd.js",
	output: {
		file: "dist/index.umd.js",
		format: "umd",
		name: "BruceUi"
	},
	plugins: PLUGINS
}];