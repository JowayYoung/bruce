import{JsLoader as p}from"../loader/index.js";export default function rr({browsers:e=[],debug:s=!1,frame:r="js",mode:u="usage",useTs:d=!1}={}){return{exclude:/node_modules/,include:/src/,test:/\.(jsx?|tsx?)$/,use:[p({browsers:e,debug:s,frame:r,mode:u,useTs:d})]}}