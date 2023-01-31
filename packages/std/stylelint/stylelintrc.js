// 校验HTML与Vue的CSS时开启配置的stylelint.configBasedir与stylelint.customSyntax
// https://stylelint.io/migration-guide/to-14/
// https://github.com/stylelint/stylelint/blob/14.0.0/docs/migration-guide/to-14.md#syntax-option-and-automatic-inferral-of-syntax
// https://gitmemory.cn/index.php/repo/stylelint/stylelint/issues/5746

module.exports = {
	extends: "stylelint-config-standard",
	overrides: [{
		customSyntax: "postcss-scss",
		files: ["**/*.css", "**/*.scss"]
	}, {
		customSyntax: "postcss-less",
		files: ["**/*.less"]
	}, {
		customSyntax: "postcss-html",
		files: ["**/*.html", "**/*.vue"]
	}],
	plugins: ["stylelint-order"],
	rules: {
		/* eslint-disable quote-props */
		"alpha-value-notation": "number",
		"at-rule-empty-line-before": "never",
		"at-rule-no-unknown": [true, { ignoreAtRules: ["content", "each", "error", "extend", "for", "function", "if", "include", "mixin", "return", "while"] }],
		"color-function-notation": "legacy",
		"color-no-invalid-hex": true,
		"comment-empty-line-before": "never",
		"custom-property-empty-line-before": "never",
		"declaration-colon-newline-after": null,
		"declaration-empty-line-before": "never",
		"function-linear-gradient-no-nonstandard-direction": null,
		"function-no-unknown": null,
		"import-notation": null,
		"indentation": "tab",
		"max-line-length": null,
		"no-descending-specificity": null,
		"no-empty-source": null,
		"no-missing-end-of-source-newline": null,
		"number-leading-zero": "never",
		"order/order": [
			"custom-properties",
			"declarations"
		],
		"order/properties-order": [
			// 布局属性
			"display",
			"visibility",
			"overflow",
			"overflow-x",
			"overflow-y",
			"scroll-behavior",
			"scroll-snap-align",
			// 布局属性：浮动
			"float",
			"clear",
			// 布局属性：定位
			"position",
			"left",
			"right",
			"top",
			"bottom",
			"z-index",
			// 布局属性：列表
			"list-style",
			"list-style-type",
			"list-style-position",
			"list-style-image",
			// 布局属性：表格
			"table-layout",
			"border-collapse",
			"border-spacing",
			"caption-side",
			"empty-cells",
			// 布局属性：弹性
			"flex-flow",
			"flex-direction",
			"flex-wrap",
			"justify-content",
			"align-content",
			"align-items",
			"align-self",
			"flex",
			"flex-grow",
			"flex-shrink",
			"flex-basis",
			"order",
			// 布局属性：多列
			"columns",
			"column-width",
			"column-count",
			"column-gap",
			"column-rule",
			"column-rule-width",
			"column-rule-style",
			"column-rule-color",
			"column-span",
			"column-fill",
			"column-break-before",
			"column-break-after",
			"column-break-inside",
			// 布局属性：格栅
			"grid-columns",
			"grid-rows",
			// 尺寸属性
			"box-sizing",
			"margin",
			"margin-left",
			"margin-right",
			"margin-top",
			"margin-bottom",
			"padding",
			"padding-left",
			"padding-right",
			"padding-top",
			"padding-bottom",
			"border",
			"border-width",
			"border-style",
			"border-color",
			"border-colors",
			"border-left",
			"border-left-width",
			"border-left-style",
			"border-left-color",
			"border-left-colors",
			"border-right",
			"border-right-width",
			"border-right-style",
			"border-right-color",
			"border-right-colors",
			"border-top",
			"border-top-width",
			"border-top-style",
			"border-top-color",
			"border-top-colors",
			"border-bottom",
			"border-bottom-width",
			"border-bottom-style",
			"border-bottom-color",
			"border-bottom-colors",
			"border-radius",
			"border-top-left-radius",
			"border-top-right-radius",
			"border-bottom-left-radius",
			"border-bottom-right-radius",
			"border-image",
			"border-image-source",
			"border-image-slice",
			"border-image-width",
			"border-image-outset",
			"border-image-repeat",
			"width",
			"min-width",
			"max-width",
			"height",
			"min-height",
			"max-height",
			// 界面属性
			"appearance",
			"outline",
			"outline-width",
			"outline-style",
			"outline-color",
			"outline-offset",
			"outline-radius",
			"outline-radius-topleft",
			"outline-radius-topright",
			"outline-radius-bottomleft",
			"outline-radius-bottomright",
			"background",
			"background-color",
			"background-image",
			"background-repeat",
			"background-repeat-x",
			"background-repeat-y",
			"background-position",
			"background-position-x",
			"background-position-y",
			"background-size",
			"background-origin",
			"background-clip",
			"background-attachment",
			"bakground-composite",
			"mask",
			"mask-mode",
			"mask-image",
			"mask-repeat",
			"mask-repeat-x",
			"mask-repeat-y",
			"mask-position",
			"mask-position-x",
			"mask-position-y",
			"mask-size",
			"mask-origin",
			"mask-clip",
			"mask-attachment",
			"mask-composite",
			"mask-box-image",
			"mask-box-image-source",
			"mask-box-image-width",
			"mask-box-image-outset",
			"mask-box-image-repeat",
			"mask-box-image-slice",
			"box-shadow",
			"box-reflect",
			"backdrop-filter",
			"mix-blend-mode",
			"filter",
			"opacity",
			"object-fit",
			"clip",
			"clip-path",
			"resize",
			"zoom",
			"cursor",
			"pointer-events",
			"touch-callout",
			"user-modify",
			"user-focus",
			"user-input",
			"user-select",
			"user-drag",
			// 文字属性
			"line-height",
			"line-clamp",
			"vertical-align",
			"direction",
			"unicode-bidi",
			"writing-mode",
			"ime-mode",
			"text-overflow",
			"text-decoration",
			"text-decoration-line",
			"text-decoration-style",
			"text-decoration-color",
			"text-decoration-skip",
			"text-underline-position",
			"text-align",
			"text-align-last",
			"text-justify",
			"text-indent",
			"text-stroke",
			"text-stroke-width",
			"text-stroke-color",
			"text-shadow",
			"text-transform",
			"text-size-adjust",
			"src",
			"font",
			"font-family",
			"font-style",
			"font-stretch",
			"font-weight",
			"font-variant",
			"font-size",
			"font-size-adjust",
			"color",
			// 内容属性
			"tab-size",
			"overflow-wrap",
			"word-wrap",
			"word-break",
			"word-spacing",
			"letter-spacing",
			"white-space",
			"caret-color",
			"quotes",
			"content",
			"content-visibility",
			"counter-reset",
			"counter-increment",
			"page",
			"page-break-before",
			"page-break-after",
			"page-break-inside",
			// 交互属性
			"will-change",
			"perspective",
			"perspective-origin",
			"backface-visibility",
			"transform",
			"transform-origin",
			"transform-style",
			"transition",
			"transition-property",
			"transition-duration",
			"transition-timing-function",
			"transition-delay",
			"animation",
			"animation-name",
			"animation-duration",
			"animation-timing-function",
			"animation-delay",
			"animation-iteration-count",
			"animation-direction",
			"animation-play-state",
			"animation-fill-mode",
			// Webkit专有属性
			"-webkit-overflow-scrolling",
			"-webkit-box-orient",
			"-webkit-line-clamp",
			"-webkit-text-fill-color",
			"-webkit-tap-highlight-color"
		],
		"rule-empty-line-before": "never"
		/* eslint-enable quote-props */
	}
};