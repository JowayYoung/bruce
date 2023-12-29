"use strict";var br=this&&this.__assign||function(){return br=Object.assign||function(e){for(var r,s=1,t=arguments.length;s<t;s++)for(var n in r=arguments[s])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},br.apply(this,arguments)},gr=require("path"),xr=require("process"),jr={"eol-last":["error","never"],"handle-callback-err":["error","err"],indent:["error","tab"],"linebreak-style":["error","unix"],"lines-between-class-members":["error","never"],"multiline-ternary":["off"],"no-async-promise-executor":["off"],"no-console":["off"],"no-extend-native":["off"],"no-extra-semi":["error"],"no-new":["off"],"no-proto":["off"],"no-return-assign":["off"],"no-sequences":["off"],"no-tabs":["off"],"no-unreachable":["off"],"no-useless-constructor":["off"],"no-var":["error"],"object-curly-spacing":["error","always"],"operator-linebreak":["error","before"],quotes:["error","double"],semi:["error","always"],"sort-keys":["error","asc",{caseSensitive:!1,natural:!0}],"space-before-function-paren":["error","never"],"switch-colon-spacing":["error"]},Or={"@typescript-eslint/indent":["error","tab"],"@typescript-eslint/lines-between-class-members":["error","never"],"@typescript-eslint/no-confusing-void-expression":["off"],"@typescript-eslint/no-dynamic-delete":["off"],"@typescript-eslint/no-inferrable-types":["off"],"@typescript-eslint/no-misused-promises":["off"],"@typescript-eslint/no-unused-vars":["error"],"@typescript-eslint/quotes":["error","double"],"@typescript-eslint/semi":["error","always"],"@typescript-eslint/space-before-function-paren":["error","never"],"@typescript-eslint/strict-boolean-expressions":["off"],"@typescript-eslint/unbound-method":["off"]},kr={"jsx-quotes":["error","prefer-double"]},qr={"sort-keys":["off"],"vue/component-definition-name-casing":["error","kebab-case"],"vue/component-tags-order":["error",{order:["template","style","script"]}],"vue/html-indent":["error","tab"],"vue/html-self-closing":["off"],"vue/max-attributes-per-line":["off"],"vue/multi-word-component-names":["off"],"vue/mustache-interpolation-spacing":["error","never"],"vue/singleline-html-element-content-newline":["off"]},_r=br({},jr),Fr=br(br({},jr),Or),Dr=br(br({},jr),kr),Tr=br(br(br({},jr),Or),kr),Vr=br(br({},jr),qr),Pr=br(br(br({},jr),Or),qr),Cr={env:{browser:!0,commonjs:!0,es6:!0,jquery:!0,node:!0},overrides:[{extends:["standard"],files:["*.js","*.cjs","*.mjs"],parser:"@babel/eslint-parser",parserOptions:{babelOptions:{cwd:(0,gr.join)(__dirname,"..")},ecmaVersion:"latest",requireConfigFile:!1,sourceType:"module"},plugins:["html"],rules:_r},{extends:["standard-with-typescript","plugin:@typescript-eslint/recommended"],files:["*.ts","*.cts","*.mts"],parser:"@typescript-eslint/parser",parserOptions:{createDefaultProgram:!0,ecmaVersion:"latest",project:"tsconfig.json",sourceType:"module",tsconfigRootDir:(0,xr.cwd)()},plugins:["html","@typescript-eslint"],rules:Fr},{extends:["standard","plugin:react/recommended","plugin:react-hooks/recommended"],files:["*.jsx"],parser:"@babel/eslint-parser",parserOptions:{babelOptions:{cwd:(0,gr.join)(__dirname,".."),presets:["@babel/preset-react"]},ecmaFeatures:{jsx:!0},ecmaVersion:"latest",requireConfigFile:!1,sourceType:"module"},plugins:["html","react","react-hooks"],rules:Dr,settings:{react:{version:"detect"}}},{extends:["standard-with-typescript","plugin:react/recommended","plugin:react-hooks/recommended","plugin:@typescript-eslint/recommended"],files:["*.tsx"],parser:"@typescript-eslint/parser",parserOptions:{createDefaultProgram:!0,ecmaFeatures:{jsx:!0},ecmaVersion:"latest",project:"tsconfig.json",sourceType:"module",tsconfigRootDir:(0,xr.cwd)()},plugins:["html","react","react-hooks","@typescript-eslint"],rules:Tr,settings:{react:{version:"detect"}}},{extends:["standard","plugin:vue/recommended"],files:["*.vue"],parser:"vue-eslint-parser",parserOptions:{babelOptions:{cwd:(0,gr.join)(__dirname,"..")},ecmaVersion:"latest",extraFileExtensions:[".vue"],parser:"@babel/eslint-parser",requireConfigFile:!1,sourceType:"module"},plugins:["html","vue"],rules:Vr},{extends:["standard-with-typescript","plugin:vue/recommended","plugin:@typescript-eslint/recommended"],files:["*.ts.vue"],parser:"vue-eslint-parser",parserOptions:{createDefaultProgram:!0,ecmaVersion:"latest",extraFileExtensions:[".vue"],parser:"@typescript-eslint/parser",project:"tsconfig.json",sourceType:"module",tsconfigRootDir:(0,xr.cwd)()},plugins:["html","vue","@typescript-eslint"],rules:Pr}],root:!0};module.exports=Cr;