import io from"inquirer";import{DEPENDENCE as Le,DEPS as Me,EXT as Ne,FRAME as Oe,NAMEA as Pe,STYLE as Qe,USE_INSTALLER as Re,USE_TS as Ue}from"../question/index.js";export default async function qr(){const{prompt:e}=io,{frame:t}=await e(Oe),r="js"!==t,s=[Pe,Ne,Qe,r&&Me(t),r&&Ue,Re].filter(Boolean),o=await e(s),{deps:p,useTs:d}=o;return p&&(o.deps=Le[t].reduce(((e,t)=>(t.disabled&&e.push(t.value),e)),p).sort()),d&&"react"===t?(o.deps=o.deps.filter((e=>"prop-types"!==e)),o.devdeps=["@types/node","@types/webpack-env",p.includes("react")&&"@types/react",p.includes("react-dom")&&"@types/react-dom",p.includes("react-router-dom")&&"@types/react-router-dom"].filter(Boolean).sort()):d&&"vue"===t&&(o.devdeps=["@types/node","@types/webpack-env"]),{frame:t,...o}}