import _Array from "./common/array";
import _Dates from "./common/date";
import _Functions from "./common/function";
import _Numbers from "./common/number";
import _Object from "./common/object";
import _Regexps from "./common/regexp";
import _Strings from "./common/string";
import _Types from "./common/type";
import Fses from "./node/fs";
import Processes from "./node/process";
import Types from "./node/type";

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