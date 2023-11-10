import { join } from "path";
import { cwd } from "process";
import { type Linter } from "eslint";

/* eslint-disable quote-props */
const jsRules: Partial<Linter.RulesRecord> = {
	"eol-last": ["error", "never"],
	"handle-callback-err": ["error", "err"],
	"indent": ["error", "tab"],
	"lines-between-class-members": ["error", "never"],
	"multiline-ternary": ["off"],
	"no-async-promise-executor": ["off"],
	"no-console": ["off"],
	"no-extend-native": ["off"],
	"no-extra-semi": ["error"],
	"no-new": ["off"],
	"no-proto": ["off"],
	"no-return-assign": ["off"],
	"no-sequences": ["off"],
	"no-tabs": ["off"],
	"no-unreachable": ["off"],
	"no-useless-constructor": ["off"],
	"no-var": ["error"],
	"object-curly-spacing": ["error", "always"],
	"operator-linebreak": ["error", "before"],
	"quotes": ["error", "double"],
	"semi": ["error", "always"],
	"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
	"space-before-function-paren": ["error", "never"],
	"switch-colon-spacing": ["error"]
};

const tsRules: Partial<Linter.RulesRecord> = {
	"@typescript-eslint/indent": ["error", "tab"], // ts
	"@typescript-eslint/lines-between-class-members": ["error", "never"], // ts
	"@typescript-eslint/no-confusing-void-expression": ["off"], // ts
	"@typescript-eslint/no-dynamic-delete": ["off"], // ts
	"@typescript-eslint/no-inferrable-types": ["off"], // ts
	"@typescript-eslint/no-misused-promises": ["off"], // ts
	"@typescript-eslint/no-unused-vars": ["error"], // ts
	"@typescript-eslint/quotes": ["error", "double"], // ts
	"@typescript-eslint/semi": ["error", "always"], // ts
	"@typescript-eslint/space-before-function-paren": ["error", "never"], // ts
	"@typescript-eslint/strict-boolean-expressions": ["off"], // ts
	"eol-last": ["error", "never"],
	"handle-callback-err": ["error", "err"],
	"indent": ["off"],
	"lines-between-class-members": ["off"],
	"multiline-ternary": ["off"],
	"no-async-promise-executor": ["off"],
	"no-console": ["off"],
	"no-extend-native": ["off"],
	"no-extra-semi": ["error"],
	"no-new": ["off"],
	"no-proto": ["off"],
	"no-return-assign": ["off"],
	"no-sequences": ["off"],
	"no-tabs": ["off"],
	"no-unreachable": ["off"],
	"no-useless-constructor": ["off"],
	"no-var": ["error"],
	"object-curly-spacing": ["error", "always"],
	"operator-linebreak": ["error", "before"],
	"quotes": ["off"],
	"semi": ["off"],
	"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
	"space-before-function-paren": ["off"],
	"switch-colon-spacing": ["error"]
};

const jsxRules: Partial<Linter.RulesRecord> = {
	"eol-last": ["error", "never"],
	"handle-callback-err": ["error", "err"],
	"indent": ["error", "tab"],
	"jsx-quotes": ["error", "prefer-double"], // react
	"lines-between-class-members": ["error", "never"],
	"multiline-ternary": ["off"],
	"no-async-promise-executor": ["off"],
	"no-console": ["off"],
	"no-extend-native": ["off"],
	"no-extra-semi": ["error"],
	"no-new": ["off"],
	"no-proto": ["off"],
	"no-return-assign": ["off"],
	"no-sequences": ["off"],
	"no-tabs": ["off"],
	"no-unreachable": ["off"],
	"no-useless-constructor": ["off"],
	"no-var": ["error"],
	"object-curly-spacing": ["error", "always"],
	"operator-linebreak": ["error", "before"],
	"quotes": ["error", "double"],
	"semi": ["error", "always"],
	"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
	"space-before-function-paren": ["error", "never"],
	"switch-colon-spacing": ["error"]
};

const tsxRules: Partial<Linter.RulesRecord> = {
	"@typescript-eslint/indent": ["error", "tab"], // ts
	"@typescript-eslint/lines-between-class-members": ["error", "never"], // ts
	"@typescript-eslint/no-confusing-void-expression": ["off"], // ts
	"@typescript-eslint/no-dynamic-delete": ["off"], // ts
	"@typescript-eslint/no-inferrable-types": ["off"], // ts
	"@typescript-eslint/no-misused-promises": ["off"], // ts
	"@typescript-eslint/no-unused-vars": ["error"], // ts
	"@typescript-eslint/quotes": ["error", "double"], // ts
	"@typescript-eslint/semi": ["error", "always"], // ts
	"@typescript-eslint/space-before-function-paren": ["error", "never"], // ts
	"@typescript-eslint/strict-boolean-expressions": ["off"], // ts
	"eol-last": ["error", "never"],
	"handle-callback-err": ["error", "err"],
	"indent": ["off"],
	"jsx-quotes": ["error", "prefer-double"], // react
	"lines-between-class-members": ["off"],
	"multiline-ternary": ["off"],
	"no-async-promise-executor": ["off"],
	"no-console": ["off"],
	"no-extend-native": ["off"],
	"no-extra-semi": ["error"],
	"no-new": ["off"],
	"no-proto": ["off"],
	"no-return-assign": ["off"],
	"no-sequences": ["off"],
	"no-tabs": ["off"],
	"no-unreachable": ["off"],
	"no-useless-constructor": ["off"],
	"no-var": ["error"],
	"object-curly-spacing": ["error", "always"],
	"operator-linebreak": ["error", "before"],
	"quotes": ["off"],
	"semi": ["off"],
	"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
	"space-before-function-paren": ["off"],
	"switch-colon-spacing": ["error"]
};

const vueRules: Partial<Linter.RulesRecord> = {
	"eol-last": ["error", "never"],
	"handle-callback-err": ["error", "err"],
	"indent": ["error", "tab"],
	"lines-between-class-members": ["error", "never"],
	"multiline-ternary": ["off"],
	"no-async-promise-executor": ["off"],
	"no-console": ["off"],
	"no-extend-native": ["off"],
	"no-extra-semi": ["error"],
	"no-new": ["off"],
	"no-proto": ["off"],
	"no-return-assign": ["off"],
	"no-sequences": ["off"],
	"no-tabs": ["off"],
	"no-unreachable": ["off"],
	"no-useless-constructor": ["off"],
	"no-var": ["error"],
	"object-curly-spacing": ["error", "always"],
	"operator-linebreak": ["error", "before"],
	"quotes": ["error", "double"],
	"semi": ["error", "always"],
	"space-before-function-paren": ["error", "never"],
	"switch-colon-spacing": ["error"],
	"vue/component-definition-name-casing": ["error", "kebab-case"], // vue
	"vue/component-tags-order": ["error", { order: ["template", "style", "script"] }], // vue
	"vue/html-indent": ["error", "tab"], // vue
	"vue/html-self-closing": ["off"], // vue
	"vue/max-attributes-per-line": ["off"], // vue
	"vue/multi-word-component-names": ["off"], // vue
	"vue/mustache-interpolation-spacing": ["error", "never"], // vue
	"vue/singleline-html-element-content-newline": ["off"] // vue
};

const tsvueRules: Partial<Linter.RulesRecord> = {
	"@typescript-eslint/indent": ["error", "tab"], // ts
	"@typescript-eslint/lines-between-class-members": ["error", "never"], // ts
	"@typescript-eslint/no-confusing-void-expression": ["off"], // ts
	"@typescript-eslint/no-dynamic-delete": ["off"], // ts
	"@typescript-eslint/no-inferrable-types": ["off"], // ts
	"@typescript-eslint/no-misused-promises": ["off"], // ts
	"@typescript-eslint/no-unused-vars": ["error"], // ts
	"@typescript-eslint/quotes": ["error", "double"], // ts
	"@typescript-eslint/semi": ["error", "always"], // ts
	"@typescript-eslint/space-before-function-paren": ["error", "never"], // ts
	"@typescript-eslint/strict-boolean-expressions": ["off"], // ts
	"eol-last": ["error", "never"],
	"handle-callback-err": ["error", "err"],
	"indent": ["off"],
	"lines-between-class-members": ["off"],
	"multiline-ternary": ["off"],
	"no-async-promise-executor": ["off"],
	"no-console": ["off"],
	"no-extend-native": ["off"],
	"no-extra-semi": ["error"],
	"no-new": ["off"],
	"no-proto": ["off"],
	"no-return-assign": ["off"],
	"no-sequences": ["off"],
	"no-tabs": ["off"],
	"no-unreachable": ["off"],
	"no-useless-constructor": ["off"],
	"no-var": ["error"],
	"object-curly-spacing": ["error", "always"],
	"operator-linebreak": ["error", "before"],
	"quotes": ["off"],
	"semi": ["off"],
	"space-before-function-paren": ["off"],
	"switch-colon-spacing": ["error"],
	"vue/component-definition-name-casing": ["error", "kebab-case"], // vue
	"vue/component-tags-order": ["error", { order: ["template", "style", "script"] }], // vue
	"vue/html-indent": ["error", "tab"], // vue
	"vue/html-self-closing": ["off"], // vue
	"vue/max-attributes-per-line": ["off"], // vue
	"vue/multi-word-component-names": ["off"], // vue
	"vue/mustache-interpolation-spacing": ["error", "never"], // vue
	"vue/singleline-html-element-content-newline": ["off"] // vue
};
/* eslint-enable quote-props */

const ESLINT: Linter.Config = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true
	},
	overrides: [{
		extends: [
			"standard"
		],
		files: [
			"*.js",
			"*.cjs",
			"*.mjs"
		],
		parser: "@babel/eslint-parser",
		parserOptions: {
			babelOptions: {
				cwd: join(__dirname, "..")
			},
			ecmaVersion: "latest",
			requireConfigFile: false,
			sourceType: "module"
		},
		plugins: [
			"html"
		],
		rules: jsRules
	}, {
		extends: [
			"standard-with-typescript",
			"plugin:@typescript-eslint/recommended"
		],
		files: [
			"*.ts",
			"*.cts",
			"*.mts"
		],
		parser: "@typescript-eslint/parser",
		parserOptions: {
			createDefaultProgram: true,
			ecmaVersion: "latest",
			project: "tsconfig.json",
			sourceType: "module",
			tsconfigRootDir: cwd()
		},
		plugins: [
			"html",
			"@typescript-eslint"
		],
		rules: tsRules
	}, {
		extends: [
			"standard",
			"plugin:react/recommended",
			"plugin:react-hooks/recommended"
		],
		files: [
			"*.jsx"
		],
		parser: "@babel/eslint-parser",
		parserOptions: {
			babelOptions: {
				cwd: join(__dirname, ".."),
				presets: ["@babel/preset-react"]
			},
			ecmaFeatures: { jsx: true },
			ecmaVersion: "latest",
			requireConfigFile: false,
			sourceType: "module"
		},
		plugins: [
			"html",
			"react",
			"react-hooks"
		],
		rules: jsxRules,
		settings: {
			react: {
				version: "detect"
			}
		}
	}, {
		extends: [
			"standard-with-typescript",
			"plugin:react/recommended",
			"plugin:react-hooks/recommended",
			"plugin:@typescript-eslint/recommended"
		],
		files: [
			"*.tsx"
		],
		parser: "@typescript-eslint/parser",
		parserOptions: {
			createDefaultProgram: true,
			ecmaFeatures: { jsx: true },
			ecmaVersion: "latest",
			project: "tsconfig.json",
			sourceType: "module",
			tsconfigRootDir: cwd()
		},
		plugins: [
			"html",
			"react",
			"react-hooks",
			"@typescript-eslint"
		],
		rules: tsxRules,
		settings: {
			react: {
				version: "detect"
			}
		}
	}, {
		extends: [
			"standard",
			"plugin:vue/recommended"
		],
		files: [
			"*.vue"
		],
		parser: "vue-eslint-parser",
		parserOptions: {
			babelOptions: {
				cwd: join(__dirname, "..")
			},
			ecmaVersion: "latest",
			extraFileExtensions: [".vue"],
			parser: "@babel/eslint-parser",
			requireConfigFile: false,
			sourceType: "module"
		},
		plugins: [
			"html",
			"vue"
		],
		rules: vueRules
	}, {
		extends: [
			"standard-with-typescript",
			"plugin:vue/recommended",
			"plugin:@typescript-eslint/recommended"
		],
		files: [
			"*.ts.vue"
		],
		parser: "vue-eslint-parser",
		parserOptions: {
			createDefaultProgram: true,
			ecmaVersion: "latest",
			extraFileExtensions: [".vue"],
			parser: "@typescript-eslint/parser",
			project: "tsconfig.json",
			sourceType: "module",
			tsconfigRootDir: cwd()
		},
		plugins: [
			"html",
			"vue",
			"@typescript-eslint"
		],
		rules: tsvueRules
	}],
	root: true
};

export = ESLINT;