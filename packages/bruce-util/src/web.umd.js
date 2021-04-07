import {
	GroupMemKey,
	RecordMemPosition,
	StatMemCount,
	StatMemKeyword
} from "./common/array.js";
import {
	FormatCountdown,
	FormatDiffTime
} from "./common/date.js";
import {
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
} from "./common/function.js";
import {
	ByteSize,
	FillNum,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
} from "./common/number.js";
import {
	GetKeys
} from "./common/object.js";
import {
	CheckText,
	CheckTextPlus,
	MatchBracketText
} from "./common/regexp.js";
import {
	DesePhone,
	FormatPhone,
	RandomColor,
	RandomId,
	RemoveTag,
	ReverseText,
	StartScore
} from "./common/string.js";
import {
	CompareObj,
	EnvType,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsEqual,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb,
	TypeOf
} from "./common/type.js";
import {
	GetCookie,
	RemoveCookie,
	SetCookie
} from "./web/cookie.js";
import {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	Jsonp,
	LoadScript
} from "./web/dom.js";
import {
	Ajax
} from "./web/function.js";
import {
	ClearLStorage,
	ClearSStorage,
	GetLStorage,
	GetSStorage,
	RemoveLStorage,
	RemoveSStorage,
	SetLStorage,
	SetSStorage
} from "./web/storage.js";
import {
	BrowserType,
	IsElement
} from "./web/type.js";
import {
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
} from "./web/url.js";

export default {
	Ajax,
	AsyncTo,
	AutoResponse,
	BrowserType,
	ByteSize,
	CheckText,
	CheckTextPlus,
	ClearLStorage,
	ClearSStorage,
	CompareObj,
	CopyPaste,
	Debounce,
	DesePhone,
	DownloadFile,
	EnvType,
	FillNum,
	FilterXss,
	FormatCountdown,
	FormatDiffTime,
	FormatPhone,
	GetCookie,
	GetKeys,
	GetLStorage,
	GetSStorage,
	GroupMemKey,
	Img2Base64,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsElement,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsEqual,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb,
	Jsonp,
	LoadScript,
	MatchBracketText,
	ParseUrlSearch,
	RandomColor,
	RandomId,
	RandomNum,
	RandomNumPlus,
	RecordMemPosition,
	RemoveCookie,
	RemoveLStorage,
	RemoveSStorage,
	RemoveTag,
	RemoveUrlSearch,
	ReverseText,
	RoundNum,
	SetCookie,
	SetLStorage,
	SetSStorage,
	SetUrlSearch,
	StartScore,
	StatMemCount,
	StatMemKeyword,
	StringifyUrlSearch,
	ThousandNum,
	Throttle,
	TypeOf,
	WaitFor
};