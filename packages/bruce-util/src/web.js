import _Array from "./common/array";
import _Dates from "./common/date";
import _Functions from "./common/function";
import _Numbers from "./common/number";
import _Object from "./common/object";
import _Regexps from "./common/regexp";
import _Strings from "./common/string";
import _Types from "./common/type";
import Cookies from "./web/cookie";
import Doms from "./web/dom";
import Storages from "./web/storage";
import Types from "./web/type";
import Urls from "./web/url";

export default {
	..._Array,
	..._Dates,
	..._Functions,
	..._Numbers,
	..._Object,
	..._Regexps,
	..._Strings,
	..._Types,
	...Cookies,
	...Doms,
	...Storages,
	...Types,
	...Urls
};