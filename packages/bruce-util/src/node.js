import _Array from "./common/array.js";
import _Dates from "./common/date.js";
import _Functions from "./common/function.js";
import _Numbers from "./common/number.js";
import _Object from "./common/object.js";
import _Regexps from "./common/regexp.js";
import _Strings from "./common/string.js";
import _Types from "./common/type.js";
import Fses from "./node/fs.js";
import Processes from "./node/process.js";
import Types from "./node/type.js";

export default {
	..._Array,
	..._Dates,
	..._Functions,
	..._Numbers,
	..._Object,
	..._Regexps,
	..._Strings,
	..._Types,
	...Fses,
	...Processes,
	...Types
};