import CommonjsPlugin from "@rollup/plugin-commonjs";
import JsonPlugin from "@rollup/plugin-json";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import TerserPlugin from "@rollup/plugin-terser";
import TypescriptPlugin from "@rollup/plugin-typescript";
import { cleandir as CleandirPlugin } from "rollup-plugin-cleandir";
import DtsPlugin from "rollup-plugin-dts";

const EXTERNALS = [
	"axios"
];

const GLOBALS = {
	axios: "Axios"
};

const PLUGINS = [
	CommonjsPlugin(),
	JsonPlugin(),
	TypescriptPlugin(),
	TerserPlugin({
		compress: { drop_console: false },
		format: { comments: false }
	})
];

export default [{
	input: "src/index.ts",
	output: {
		file: "dist/index.js",
		format: "cjs"
	},
	plugins: [CleandirPlugin("dist"), NodeResolvePlugin(), ...PLUGINS]
}, {
	input: "src/index.ts",
	output: {
		file: "dist/index.esm.js",
		format: "esm"
	},
	plugins: [NodeResolvePlugin(), ...PLUGINS]
}, {
	input: "src/index.umd.ts",
	output: {
		file: "dist/index.umd.js",
		format: "umd",
		name: "BruceUs"
	},
	plugins: [NodeResolvePlugin(), ...PLUGINS]
}, {
	external: EXTERNALS,
	input: "src/web.ts",
	output: {
		file: "dist/web.js",
		format: "cjs",
		globals: GLOBALS
	},
	plugins: [NodeResolvePlugin(), ...PLUGINS]
}, {
	external: EXTERNALS,
	input: "src/web.ts",
	output: {
		file: "dist/web.esm.js",
		format: "esm",
		globals: GLOBALS
	},
	plugins: [NodeResolvePlugin(), ...PLUGINS]
}, {
	input: "src/web.umd.ts",
	output: {
		file: "dist/web.umd.js",
		format: "umd",
		name: "BruceUs"
	},
	plugins: [NodeResolvePlugin({ browser: true }), ...PLUGINS]
}, {
	input: "src/node.ts",
	output: { file: "dist/node.js", format: "cjs" },
	plugins: [NodeResolvePlugin({ preferBuiltins: true }), ...PLUGINS]
}, {
	input: "src/node.ts",
	output: { file: "dist/node.esm.js", format: "esm" },
	plugins: [NodeResolvePlugin({ preferBuiltins: true }), ...PLUGINS]
}, {
	input: "src/index.ts",
	output: { file: "dist/index.d.ts", format: "esm" },
	plugins: [DtsPlugin({ compilerOptions: { skipLibCheck: true } })]
}, {
	input: "src/web.ts",
	output: { file: "dist/web.d.ts", format: "esm" },
	plugins: [DtsPlugin({ compilerOptions: { skipLibCheck: true } })]
}, {
	input: "src/node.ts",
	output: { file: "dist/node.d.ts", format: "esm" },
	plugins: [DtsPlugin({ compilerOptions: { skipLibCheck: true } })]
}];