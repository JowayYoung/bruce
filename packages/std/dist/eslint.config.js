import{dirname as o}from"node:path";import{fileURLToPath as l}from"node:url";import{FlatCompat as ys}from"@eslint/eslintrc";import ms from"@eslint/js";import gs from"@stylistic/eslint-plugin";import{AbsPath as S}from"@yangzw/bruce-us/dist/node.js";import us from"eslint-plugin-react/configs/recommended";import fs from"eslint-plugin-react-hooks";import bs from"eslint-plugin-vue";import js from"globals";import xs from"typescript-eslint";const N=o(l(import.meta.url)),ws=new ys({baseDirectory:S("..",N),resolvePluginsRelativeTo:S("..",N)}),vs={"handle-callback-err":["error","err"],"no-async-promise-executor":["off"],"no-console":["off"],"no-new":["off"],"no-sequences":["off"],"sort-keys":["error","asc",{natural:!0}]},Os={"@typescript-eslint/ban-types":["off"],"@typescript-eslint/no-confusing-void-expression":["off"],"@typescript-eslint/no-misused-promises":["off"],"@typescript-eslint/no-throw-literal":["off"],"@typescript-eslint/strict-boolean-expressions":["off"]},hs={"sort-keys":["off"],"vue/block-order":["error",{order:["template","style[scoped]","style:not([scoped])","script"]}],"vue/component-definition-name-casing":["error","kebab-case"],"vue/component-tags-order":["error",{order:["template","style","script"]}],"vue/html-indent":["error","tab"],"vue/html-self-closing":["off"],"vue/max-attributes-per-line":["error",{multiline:1,singleline:3}],"vue/multi-word-component-names":["off"],"vue/mustache-interpolation-spacing":["error","never"],"vue/singleline-html-element-content-newline":["off"],"vue/sort-keys":["error","asc",{ignoreGrandchildrenOf:["components","computed","directives","filters","inject","name","props","watch"],natural:!0}]},ks={"@stylistic/array-bracket-newline":["error","consistent"],"@stylistic/array-bracket-spacing":["error"],"@stylistic/array-element-newline":["error","consistent"],"@stylistic/arrow-parens":["error","as-needed"],"@stylistic/arrow-spacing":["error"],"@stylistic/block-spacing":["error"],"@stylistic/brace-style":["error"],"@stylistic/comma-dangle":["error"],"@stylistic/comma-spacing":["error"],"@stylistic/comma-style":["error"],"@stylistic/computed-property-spacing":["error"],"@stylistic/dot-location":["error","property"],"@stylistic/eol-last":["error","never"],"@stylistic/function-call-argument-newline":["error","consistent"],"@stylistic/function-call-spacing":["error"],"@stylistic/function-paren-newline":["error","consistent"],"@stylistic/generator-star-spacing":["error"],"@stylistic/implicit-arrow-linebreak":["error"],"@stylistic/indent":["error","tab"],"@stylistic/indent-binary-ops":["error","tab"],"@stylistic/jsx-child-element-spacing":["off"],"@stylistic/jsx-closing-bracket-location":["error"],"@stylistic/jsx-closing-tag-location":["off"],"@stylistic/jsx-curly-brace-presence":["error",{children:"never",propElementValues:"always",props:"never"}],"@stylistic/jsx-curly-newline":["error"],"@stylistic/jsx-curly-spacing":["error",{children:!0}],"@stylistic/jsx-equals-spacing":["error"],"@stylistic/jsx-first-prop-new-line":["error"],"@stylistic/jsx-function-call-newline":["error"],"@stylistic/jsx-indent":["error","tab"],"@stylistic/jsx-indent-props":["error","tab"],"@stylistic/jsx-max-props-per-line":["error",{maximum:{multi:1,single:3}}],"@stylistic/jsx-newline":["error",{prevent:!0}],"@stylistic/jsx-one-expression-per-line":["off"],"@stylistic/jsx-pascal-case":["error",{allowNamespace:!0}],"@stylistic/jsx-props-no-multi-spaces":["error"],"@stylistic/jsx-quotes":["error"],"@stylistic/jsx-self-closing-comp":["error",{html:!1}],"@stylistic/jsx-sort-props":["error",{callbacksLast:!0,ignoreCase:!0,noSortAlphabetically:!1,reservedFirst:!0,shorthandLast:!0}],"@stylistic/jsx-tag-spacing":["error",{beforeClosing:"never"}],"@stylistic/jsx-wrap-multilines":["off"],"@stylistic/key-spacing":["error"],"@stylistic/keyword-spacing":["error"],"@stylistic/line-comment-position":["off"],"@stylistic/linebreak-style":["error"],"@stylistic/lines-around-comment":["error",{afterHashbangComment:!1,afterLineComment:!1,beforeLineComment:!1}],"@stylistic/lines-between-class-members":["error","never"],"@stylistic/max-len":["error",{code:200,ignoreComments:!0,ignoreRegExpLiterals:!0,ignoreStrings:!0,ignoreTemplateLiterals:!0,ignoreTrailingComments:!0,ignoreUrls:!0}],"@stylistic/max-statements-per-line":["error"],"@stylistic/member-delimiter-style":["error",{multiline:{delimiter:"none",requireLast:!1},singleline:{requireLast:!1}}],"@stylistic/multiline-comment-style":["off"],"@stylistic/multiline-ternary":["off"],"@stylistic/new-parens":["error"],"@stylistic/newline-per-chained-call":["error"],"@stylistic/no-confusing-arrow":["off"],"@stylistic/no-extra-parens":["error","all",{ignoreJSX:"multi-line"}],"@stylistic/no-extra-semi":["error"],"@stylistic/no-floating-decimal":["error"],"@stylistic/no-mixed-operators":["off"],"@stylistic/no-mixed-spaces-and-tabs":["error"],"@stylistic/no-multi-spaces":["error"],"@stylistic/no-multiple-empty-lines":["error",{max:1,maxBOF:0,maxEOF:0}],"@stylistic/no-tabs":["off"],"@stylistic/no-trailing-spaces":["error"],"@stylistic/no-whitespace-before-property":["error"],"@stylistic/nonblock-statement-body-position":["error"],"@stylistic/object-curly-newline":["error"],"@stylistic/object-curly-spacing":["error","always"],"@stylistic/object-property-newline":["off"],"@stylistic/one-var-declaration-per-line":["error"],"@stylistic/operator-linebreak":["error","before"],"@stylistic/padded-blocks":["error","never"],"@stylistic/padding-line-between-statements":["off"],"@stylistic/quote-props":["error","consistent"],"@stylistic/quotes":["error"],"@stylistic/rest-spread-spacing":["error"],"@stylistic/semi":["error"],"@stylistic/semi-spacing":["error"],"@stylistic/semi-style":["error"],"@stylistic/space-before-blocks":["error"],"@stylistic/space-before-function-paren":["error","never"],"@stylistic/space-in-parens":["error"],"@stylistic/space-infix-ops":["error"],"@stylistic/space-unary-ops":["error"],"@stylistic/spaced-comment":["error"],"@stylistic/switch-colon-spacing":["error"],"@stylistic/template-curly-spacing":["error"],"@stylistic/template-tag-spacing":["error"],"@stylistic/type-annotation-spacing":["error"],"@stylistic/type-generic-spacing":["error"],"@stylistic/type-named-tuple-spacing":["error"],"@stylistic/wrap-iife":["error","inside"],"@stylistic/wrap-regex":["off"],"@stylistic/yield-star-spacing":["error"]},qs=Object.assign(Object.assign(Object.assign({},vs),Os),ks),Ls=Object.assign(Object.assign(Object.assign(Object.assign({},vs),Os),hs),ks),{browser:Cs,commonjs:Fs,es5:Ts,es2015:Es,es2017:Ps,es2020:Rs,es2021:Ss,jquery:_s,node:As,serviceworker:Us,worker:zs}=js,Bs=[...ws.plugins("html","react-hooks"),ms.configs.recommended,...xs.configs.recommended,...bs.configs["flat/vue2-recommended"],{ignores:["**/dist","**/node_modules"],languageOptions:{globals:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Cs),Fs),Ts),Es),Ps),Rs),Ss),_s),As),Us),zs)},name:"common",plugins:{"@stylistic":gs}},Object.assign(Object.assign({},us),{files:["**/*.{js,cjs,mjs,ts,cts,mts,jsx,cjsx,mjsx,tsx,ctsx,mtsx}"],languageOptions:Object.assign({},us.languageOptions),name:"js and react",rules:Object.assign(Object.assign({},qs),fs.configs.recommended.rules)}),{files:["**/*.vue"],name:"vue",rules:Ls}];export default Bs;