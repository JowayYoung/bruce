import{dirname as w}from"path";import{fileURLToPath as B}from"url";import{BROWSERS_ES5 as n,AbsPath as E}from"../../constants/util/index.js";export default function p({browsers:e=[],debug:r=!1,frame:t="js",mode:s="static",useTs:o=!1}={}){const a=w(B(import.meta.url)),l=e.length?e:n,i="static"===s;return{loader:"babel-loader",options:{babelrc:!1,cacheDirectory:!0,cwd:E("../..",a),plugins:[i&&!r&&["@babel/plugin-transform-runtime",{corejs:3,regenerator:!1,useESModules:!0}],r&&"react"===t&&"react-refresh/babel"].filter(Boolean),presets:[i&&["@babel/preset-env",{corejs:3,modules:!1,targets:{browsers:l},useBuiltIns:"usage"}],o&&["@babel/preset-typescript",{allExtensions:"vue"===t}],"@babel/preset-react"].filter(Boolean)}}}