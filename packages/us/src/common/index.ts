import {
	GroupArrKey,
	RecordArrPosition,
	StatArrCount,
	StatArrKeyword
} from "./array";
import {
	EnvType,
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
} from "./boolean";
import {
	FormatCountdown,
	FormatTimeDiff
} from "./date";
import {
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
} from "./function";
import {
	FillNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
} from "./number";
import {
	FilterObj
} from "./object";
import {
	CheckText,
	CheckTextPlus,
	MatchBracketText
} from "./regexp";
import {
	DesePhone,
	FormatPhone,
	RandomColor,
	RandomId,
	RemoveTag,
	ReverseText,
	StartScore
} from "./string";

export {
	// ✅数组Array
	GroupArrKey,
	RecordArrPosition,
	StatArrCount,
	StatArrKeyword,
	// ✅布尔Boolean
	EnvType,
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
	TypeOf,
	// ✅日期Date
	FormatCountdown,
	FormatTimeDiff,
	// ✅日期Function
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor,
	// ✅数值Number
	FillNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum,
	// ✅对象Object
	FilterObj,
	// ✅正则Regexp
	CheckText,
	CheckTextPlus,
	MatchBracketText,
	// ✅字符String
	DesePhone,
	FormatPhone,
	RandomColor,
	RandomId,
	RemoveTag,
	ReverseText,
	StartScore
};