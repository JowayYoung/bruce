/** 布尔工具 **/

/**
 * @name 环境类型
 */
function EnvType(): string {
	return typeof window !== "undefined"
		? "web"
		: typeof global !== "undefined" ? "node" : "unknow";
}

/**
 * @name 判断环境
 */
function IsWeb(): boolean {
	return EnvType() === "web";
}

function IsNode(): boolean {
	return EnvType() === "node";
}

/**
 * @name 数据类型
 * @param {*} [data] 数据
 */
function TypeOf<T>(data: T): string {
	return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, "$1").toLowerCase();
}

/**
 * @name 判断基础数据类型：undefined、null、string、number、boolean、symbol
 * @param {*} [data] 数据
 */
function IsUndefined<T>(data: T): boolean {
	return TypeOf(data) === "undefined";
}

function IsNull<T>(data: T): boolean {
	return TypeOf(data) === "null";
}

function IsString<T>(data: T): boolean {
	return TypeOf(data) === "string";
}

function IsNumber<T>(data: T): boolean {
	return TypeOf(data) === "number";
}

function IsBoolean<T>(data: T): boolean {
	return TypeOf(data) === "boolean";
}

function IsSymbol<T>(data: T): boolean {
	return TypeOf(data) === "symbol";
}

/**
 * @name 判断复合数据类型：array、object、date、regexp、function、class、element、set、map、weakset、weakmap
 * @param {*} [data] 数据
 */
function IsArray<T>(data: T): boolean {
	return TypeOf(data) === "array";
}

function IsObject<T>(data: T): boolean {
	return TypeOf(data) === "object";
}

function IsDate<T>(data: T): boolean {
	return TypeOf(data) === "date";
}

function IsRegExp<T>(data: T): boolean {
	return TypeOf(data) === "regexp";
}

function IsFunction<T>(data: T): boolean {
	return TypeOf(data) === "function";
}

function IsClass<T extends string>(data: T): boolean {
	return IsFunction(data) && /^class\s+[\dA-Za-z]/.test(data.toString());
}

function IsSet<T>(data: T): boolean {
	return TypeOf(data) === "set";
}

function IsMap<T>(data: T): boolean {
	return TypeOf(data) === "map";
}

function IsWeakSet<T>(data: T): boolean {
	return TypeOf(data) === "weakset";
}

function IsWeakMap<T>(data: T): boolean {
	return TypeOf(data) === "weakmap";
}

function IsElement<T>(data: T): boolean {
	return /^html(.+?)element$/.test(TypeOf(data));
}

/**
 * @name 判断函数类型：asyncfunction、function、arguments
 * @param {*} [data] 数据
 */
function IsAsyncFunction<T>(data: T): boolean {
	return TypeOf(data) === "asyncfunction";
}

function IsSyncFunction<T>(data: T): boolean {
	return TypeOf(data) === "function";
}

function IsArguments<T>(data: T): boolean {
	return TypeOf(data) === "arguments";
}

/**
 * @name 判断空类型：error、empty、emptyarray、emptyobject
 * @param {*} [data] 数据
 */
function IsError<T>(data: T): boolean {
	return data instanceof Error;
}

function IsEmpty<T>(data: T): boolean {
	return !data; // undefined null "" 0 false NaN
}

function IsEmptyArray<T>(data: T): boolean {
	return Array.isArray(data) && !data.length;
}

function IsEmptyObject<T>(data: T): boolean {
	return IsObject(data) && !Object.keys(data).length;
}

export {
	EnvType, // 环境类型
	IsArguments, // 判断函数参数
	IsArray, // 判断数组
	IsAsyncFunction, // 判断异步函数
	IsBoolean, // 判断布尔
	IsClass, // 判断类
	IsDate, // 判断日期
	IsElement, // 判断元素
	IsEmpty, // 判断空
	IsEmptyArray, // 判断空数组
	IsEmptyObject, // 判断空对象
	IsError, // 判断错误
	IsFunction, // 判断函数
	IsMap, // 判断映射
	IsNode, // 判断Node
	IsNull, // 判断空值
	IsNumber, // 判断数值
	IsObject, // 判断对象
	IsRegExp, // 判断正则
	IsSet, // 判断集合
	IsString, // 判断字符
	IsSymbol, // 判断标记
	IsSyncFunction, // 判断同步函数
	IsUndefined, // 判断未定义
	IsWeakMap, // 判断弱映射
	IsWeakSet, // 判断弱集合
	IsWeb, // 判断Web
	TypeOf // 数据类型
};