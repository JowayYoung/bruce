import{IsFunction as ue,IsString as pe}from"@bruce/us/dist/node.js";import{merge as ie}from"webpack-merge";import{BROWSERS_ES6 as de}from"../../constants/util/index.js";import{ProdEntry as m}from"../entry/index.js";import{ProdOptimizer as z}from"../optimizer/index.js";import{ProdOutput as A}from"../output/index.js";import{BarPlugin as W,BuildNotifierPlugin as E,BundleAnalyzerPlugin as G,CompressionPlugin as H,DefinePlugin as V,EslintPlugin as J,HtmlPlugin as R,HtmlTagsPlugin as Z,MiniCssExtractPlugin as q,StylelintPlugin as ii,TinyimgPlugin as ri,VuePlugin as mi}from"../plugin/index.js";import{CssRule as oe,FontRule as te,ImgRule as ae,JsRule as rr,LessRule as mr,MediaRule as or,RawRule as sr,ScssRule as er,SvgRule as ir,VueRule as tr}from"../rule/index.js";import me from"./base-webpack.js";export default function oo(e={}){const{alias:s,browsers:r,eslintIgnores:o,eslintRules:t,frame:i,mode:l,polyfill:u,publicPath:n,scriptAssets:a,style:p,styleAssets:d,stylelintIgnores:f,stylelintRules:b,useAnalyzer:c,useCompressor:y,useCsslint:j,useHash:h,useImageminer:x,useJslint:g,useOutput:w,useTimer:T,useTs:I}=e,k=w?r:de,v=ue(n)?n(l):pe(n)?n:"";return ie(me(s),{devtool:"prod"!==l&&"source-map",entry:m(),mode:"production",module:{rules:[oe({browsers:k}),er({browsers:k}),mr({browsers:k}),rr({browsers:k,frame:i,mode:u,useTs:I}),ae({useHash:h}),te({useHash:h}),or({useHash:h}),sr(),ir(),tr()]},optimization:z({mode:l}),output:A({mode:l,publicPath:v,useHash:h,useTimer:T}),performance:{assetFilter:e=>"vendor.bundle.js"!==e&&!/\.map$/.test(e),maxAssetSize:512e3,maxEntrypointSize:1024e3},plugins:[V({mode:l}),W(),E(),G({disabled:!c}),H({disabled:!y}),J({disabled:!g,frame:i,ignores:o,rules:t,useTs:I}),R(),Z({scripts:["dynamic"===u&&"https://polyfill.alicdn.com/polyfill.min.js",...a].filter(Boolean),styles:d}),q({useHash:h}),ii({disabled:!j,frame:i,ignores:f,rules:b,style:p}),ri({disabled:!x}),mi()].filter(Boolean)})}