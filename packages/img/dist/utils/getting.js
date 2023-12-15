const ls={type:/^(format|size|volume)$/},bo={type:(s="")=>ls.type.test(s)?s:"format"},Ce={color:/^#([0-9A-F]{6}|[0-9A-F]{3})|rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)|rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)|hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)|hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/i,left:/^(0|([1-9]\d*))$/,size:/^([1-9]\d*)$/,text:/^[\w\s\u4e00-\u9fa5-]{1,50}$/,top:/^(0|([1-9]\d*))$/},ai={compress:"#compress-dist#",group:"#group-dist#",mark:"#mark-dist#",transform:"#transform-dist#"},ps={blur:/^[1-9]\d{0,2}$|^0$|^1000$/,extract:/^(0|[1-9]\d*),(0|[1-9]\d*),([1-9]\d*),([1-9]\d*)$/,flag:/^true$/,format:/^(gif|jpg|png|webp)$/,negate:/^noalpha$/,normalise:/^([1-9]|[1-9]\d),([1-9]|[1-9]\d)$/,resize:/^([1-9]\d*),([1-9]\d*)(,(cover|contain|fill|inside|outside))?$/,rotate:/^(-?\d+)(,(#([0-9A-F]{6}|[0-9A-F]{3})|rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)|rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)|hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)|hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\))?)?$/i,sharpen:/^([1-9]|10),([1-9]\d{0,5}|0),([1-9]\d{0,5}|0)$/},Fo={blur:(s="")=>ps.blur.test(s)?+s:0,extract(s=""){if(ps.extract.test(s)){const[t=0,e=0,r,d]=s.split(",").map((s=>+s));return{height:d,left:t,top:e,width:r}}return!1},flip:(s="")=>ps.flag.test(s),flop:(s="")=>ps.flag.test(s),grayscale:(s="")=>ps.flag.test(s),negate:(s="")=>ps.negate.test(s)?{alpha:!1}:ps.flag.test(s),normalise(s=""){if(ps.normalise.test(s)){let[t=1,e=99]=s.split(",").map((s=>+s));return t>e&&([t,e]=[e,t]),{lower:t,upper:e}}return ps.flag.test(s)},resize(s=""){if(ps.resize.test(s)){const[t,e,r="cover"]=s.split(",");return{fit:r,height:0==+e?null:+e,width:0==+t?null:+e}}return!1},rotate(s=""){if(ps.rotate.test(s)){const[t,e="#000"]=s.split(",");return[+t,{background:e}]}return!1},sharpen(s=""){if(ps.sharpen.test(s)){const[t=1,e=1,r=2]=s.split(",").map((s=>+s));return{m1:e,m2:r,sigma:t}}return ps.flag.test(s)},toFormat:(s="")=>ps.format.test(s)?s:""};export{ls as GROUP_REGEXP,bo as GROUP_TEST,Ce as MARK_REGEXP,ai as OUTPUT_DIR,ps as TRANSFORM_REGEXP,Fo as TRANSFORM_TEST};