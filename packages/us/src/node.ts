import {
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
} from "./common/index";
import {
	// ✅Fs文件
	AbsPath,
	CheckPath,
	CopyDir,
	CreateDir,
	ReadDir,
	ReadJson,
	RemoveDir,
	// ✅Os系统
	GetIP,
	// ✅Process进程
	RunCmd,
	// ✅Type类型
	NodeType
} from "./node/index";

export {
	AbsPath,
	AsyncTo,
	CalcNum,
	CalcNumPlus,
	CheckObjValidKey,
	CheckPath,
	CheckText,
	CheckTextPlus,
	ChunkArr,
	CopyDir,
	CreateDir,
	Debounce,
	DesePhone,
	EnvType,
	FillNum,
	FilterObjKey,
	FixedNum,
	FormatByte,
	FormatCountdown,
	FormatPhone,
	FormatTimeDiff,
	GetIP,
	GroupArr,
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
	MatchBracketText,
	NodeType,
	RandomColor,
	RandomId,
	RandomNum,
	RandomNumPlus,
	ReadDir,
	ReadJson,
	RemoveDir,
	RemoveObjEmptyKey,
	RemoveTag,
	ReverseText,
	RoundNum,
	RunCmd,
	StartScore,
	StatArrMemCount,
	StatArrMemKeyword,
	StatArrMemPosition,
	ThousandNum,
	Throttle,
	TypeOf,
	WaitFor
};