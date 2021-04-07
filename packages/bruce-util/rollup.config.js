import BabelPlugin from "@rollup/plugin-babel";
import CommonjsPlugin from "@rollup/plugin-commonjs";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import { terser as TerserPlugin } from "rollup-plugin-terser";

const PLUGINS = [
	NodeResolvePlugin(),
	CommonjsPlugin(),
	BabelPlugin({
		babelHelpers: "runtime",
		plugins: [
			["@babel/plugin-transform-runtime", { regenerator: true, useESModules: true }]
		],
		presets: [
			"@babel/preset-env"
		]
	}),
	TerserPlugin()
];

export default [{
	input: "src/web.js",
	output: {
		file: "dist/web.js",
		format: "cjs"
	},
	plugins: PLUGINS
}, {
	input: "src/web.js",
	output: {
		file: "dist/web.esm.js",
		format: "esm"
	},
	plugins: PLUGINS
}, {
	input: "src/web.umd.js",
	output: {
		file: "dist/web.umd.js",
		format: "umd",
		name: "BruceUtil"
	},
	plugins: PLUGINS
}];