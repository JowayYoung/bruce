import {
	ChunkArr,
	GroupArr,
	StatArrMemCount,
	StatArrMemKeyword,
	StatArrMemPosition
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
	CalcNum,
	CalcNumPlus,
	FillNum,
	FixedNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
} from "./number";
import {
	CheckObjValidKey,
	FilterObjKey,
	RemoveObjEmptyKey
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
	ChunkArr,
	GroupArr,
	StatArrMemCount,
	StatArrMemKeyword,
	StatArrMemPosition,
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
	CalcNum,
	CalcNumPlus,
	FillNum,
	FixedNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum,
	// ✅对象Object
	CheckObjValidKey,
	FilterObjKey,
	RemoveObjEmptyKey,
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