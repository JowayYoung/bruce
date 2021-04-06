import _Array from "./common/array.js";
import _Dates from "./common/date.js";
import _Functions from "./common/function.js";
import _Numbers from "./common/number.js";
import _Object from "./common/object.js";
import _Regexps from "./common/regexp.js";
import _Strings from "./common/string.js";
import _Types from "./common/type.js";
import Cookies from "./web/cookie.js";
import Doms from "./web/dom.js";
import Functions from "./web/function.js";
import Storages from "./web/storage.js";
import Types from "./web/type.js";
import Urls from "./web/url.js";

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
	...Functions,
	...Storages,
	...Types,
	...Urls
};