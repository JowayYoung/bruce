import{CssLoader as a,CssUrlLoader as f,LessLoader as j,PostcssLoader as v,StyleLoader as y}from"../loader/index.js";export default function mr({browsers:e=[],debug:r=!1}={}){return{exclude:/node_modules/,include:/src/,test:/\.less$/,use:[y(r),a(),v(e),f(),j()]}}