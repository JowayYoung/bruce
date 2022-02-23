import { dirname, join } from "path";
import { fileURLToPath } from "url";
import CommonjsPlugin from "@rollup/plugin-commonjs";
import ImagePlugin from "@rollup/plugin-image";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import ReplacePlugin from "@rollup/plugin-replace";
import TypescriptPlugin from "@rollup/plugin-typescript";
import { cleandir as CleandirPlugin } from "rollup-plugin-cleandir";
import PostcssPlugin from "rollup-plugin-postcss";
import DtsPlugin from "rollup-plugin-dts";
import { terser as TerserPlugin } from "rollup-plugin-terser";
import PostcssBase64 from "postcss-base64";
import PostcssImport from "postcss-import";
import PostcssPresetEnv from "postcss-preset-env";

const __dirname = dirname(fileURLToPath(import.meta.url));

const EXTERNALS = [
	"react",
	"react-dom"
];

const GLOBALS = {
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
				extensions: [".jpg", ".png", ".svg"],
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
	ImagePlugin(),
	TypescriptPlugin({ tsconfig: join(__dirname, "../../tsconfig.json") }),
	ReplacePlugin({
		preventAssignment: true,
		values: { "process.env.NODE_ENV": JSON.stringify("production") }
	}),
	TerserPlugin({
		compress: { drop_console: false },
		format: { comments: false }
	})
];

export default [{
	external: EXTERNALS,
	input: "src/index.tsx",
	output: {
		file: "dist/index.js",
		format: "cjs",
		globals: GLOBALS
	},
	plugins: [...PLUGINS, CleandirPlugin("dist")]
}, {
	external: EXTERNALS,
	input: "src/index.tsx",
	output: {
		file: "dist/index.esm.js",
		format: "esm",
		globals: GLOBALS
	},
	plugins: PLUGINS
}, {
	input: "src/index.umd.tsx",
	output: {
		file: "dist/index.umd.js",
		format: "umd",
		name: "bruceUi"
	},
	plugins: PLUGINS
}, {
	input: "src/index.tsx",
	output: {
		file: "dist/index.d.ts",
		format: "esm"
	},
	plugins: [PLUGINS[0], DtsPlugin()]
}];