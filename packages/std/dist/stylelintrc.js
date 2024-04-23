"use strict";var fr=this&&this.__assign||function(){return fr=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},fr.apply(this,arguments)},qt={"alpha-value-notation":"number","annotation-no-unknown":[!0,{ignoreAnnotations:["default"]}],"at-rule-empty-line-before":"never","at-rule-no-unknown":null,"color-function-notation":"legacy","color-no-invalid-hex":!0,"comment-empty-line-before":"never","custom-property-empty-line-before":"never","declaration-empty-line-before":"never","function-linear-gradient-no-nonstandard-direction":null,"function-no-unknown":null,"import-notation":null,"max-nesting-depth":5,"media-query-no-invalid":null,"no-descending-specificity":null,"no-empty-source":null,"property-no-unknown":[!0,{ignoreProperties:["text-fill-color","text-stroke","text-stroke-width","text-stroke-color"]}],"rule-empty-line-before":"never","unit-no-unknown":[!0,{ignoreUnits:["rpx"]}]},St={"order/order":["custom-properties","declarations"],"order/properties-order":["display","visibility","overflow","overflow-x","overflow-y","scroll-behavior","scroll-snap-align","float","clear","position","inset","left","right","top","bottom","z-index","list-style","list-style-type","list-style-position","list-style-image","table-layout","border-collapse","border-spacing","caption-side","empty-cells","flex-flow","flex-direction","flex-wrap","justify-content","align-content","align-items","align-self","flex","flex-grow","flex-shrink","flex-basis","order","columns","column-width","column-count","column-gap","column-rule","column-rule-width","column-rule-style","column-rule-color","column-span","column-fill","column-break-before","column-break-after","column-break-inside","grid-columns","grid-rows","box-sizing","margin","margin-left","margin-right","margin-top","margin-bottom","padding","padding-left","padding-right","padding-top","padding-bottom","border","border-width","border-style","border-color","border-colors","border-left","border-left-width","border-left-style","border-left-color","border-left-colors","border-right","border-right-width","border-right-style","border-right-color","border-right-colors","border-top","border-top-width","border-top-style","border-top-color","border-top-colors","border-bottom","border-bottom-width","border-bottom-style","border-bottom-color","border-bottom-colors","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","border-image","border-image-source","border-image-slice","border-image-width","border-image-outset","border-image-repeat","width","min-width","max-width","height","min-height","max-height","appearance","outline","outline-width","outline-style","outline-color","outline-offset","outline-radius","outline-radius-topleft","outline-radius-topright","outline-radius-bottomleft","outline-radius-bottomright","background","background-color","background-image","background-repeat","background-repeat-x","background-repeat-y","background-position","background-position-x","background-position-y","background-size","background-origin","background-clip","background-attachment","bakground-composite","mask","mask-mode","mask-image","mask-repeat","mask-repeat-x","mask-repeat-y","mask-position","mask-position-x","mask-position-y","mask-size","mask-origin","mask-clip","mask-attachment","mask-composite","mask-box-image","mask-box-image-source","mask-box-image-width","mask-box-image-outset","mask-box-image-repeat","mask-box-image-slice","box-shadow","box-reflect","backdrop-filter","mix-blend-mode","filter","opacity","object-fit","clip","clip-path","resize","zoom","cursor","pointer-events","touch-callout","user-modify","user-focus","user-input","user-select","user-drag","line-height","line-clamp","vertical-align","direction","unicode-bidi","writing-mode","ime-mode","text-overflow","text-decoration","text-decoration-line","text-decoration-style","text-decoration-color","text-decoration-skip","text-underline-position","text-align","text-align-last","text-justify","text-indent","text-stroke","text-stroke-width","text-stroke-color","text-shadow","text-transform","text-size-adjust","text-fill-color","src","font","font-family","font-style","font-stretch","font-weight","font-variant","font-size","font-size-adjust","color","tab-size","overflow-wrap","word-wrap","word-break","word-spacing","letter-spacing","white-space","caret-color","quotes","content","content-visibility","counter-reset","counter-increment","page","page-break-before","page-break-after","page-break-inside","will-change","perspective","perspective-origin","backface-visibility","transform","transform-origin","transform-style","transition","transition-property","transition-duration","transition-timing-function","transition-delay","animation","animation-name","animation-duration","animation-timing-function","animation-delay","animation-iteration-count","animation-direction","animation-play-state","animation-fill-mode","-webkit-overflow-scrolling","-webkit-box-orient","-webkit-line-clamp","-webkit-tap-highlight-color"]},_t={"prettier/prettier":[!0,{arrowParens:"avoid",quoteProps:"preserve",tabWidth:4,trailingComma:"none",useTabs:!0}]},Ct={extends:["stylelint-config-standard"],overrides:[{customSyntax:"postcss-html",files:["**/*.html","**/*.vue"]},{customSyntax:"postcss-less",files:["**/*.less"]},{customSyntax:"postcss-scss",files:["**/*.css","**/*.scss"]}],plugins:["stylelint-order","stylelint-prettier"],rules:fr(fr(fr({},qt),St),_t)};module.exports=Ct;