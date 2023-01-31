type KeyType = string | number;
type ValueType = string | number | boolean;
type CountType = {
    [key in KeyType]: number;
};
type GroupType = {
    [key in KeyType]: MemberType[];
};
type MemberType = {
    [key in KeyType]: string | number;
};
declare function ChunkArr<T>(arr?: T[], size?: number): T[][];
declare function GroupArr(arr?: MemberType[], key?: KeyType): GroupType;
declare function StatArrMemCount(arr?: KeyType[]): CountType;
declare function StatArrMemKeyword(arr?: string[], keywords?: string[]): string[];
declare function StatArrMemPosition(arr: ValueType[] | undefined, val: ValueType): number[];

type InfoType = "web" | "node";
declare function EnvType(): InfoType;
declare function IsWeb(): boolean;
declare function IsNode(): boolean;
declare function TypeOf<T>(data: T): string;
declare function IsUndefined<T>(data: T): boolean;
declare function IsNull<T>(data: T): boolean;
declare function IsString<T>(data: T): boolean;
declare function IsNumber<T>(data: T): boolean;
declare function IsBoolean<T>(data: T): boolean;
declare function IsSymbol<T>(data: T): boolean;
declare function IsArray<T>(data: T): boolean;
declare function IsObject<T>(data: T): boolean;
declare function IsDate<T>(data: T): boolean;
declare function IsRegExp<T>(data: T): boolean;
declare function IsFunction<T>(data: T): boolean;
declare function IsClass<T extends string>(data: T): boolean;
declare function IsSet<T>(data: T): boolean;
declare function IsMap<T>(data: T): boolean;
declare function IsWeakSet<T>(data: T): boolean;
declare function IsWeakMap<T>(data: T): boolean;
declare function IsElement<T>(data: T): boolean;
declare function IsAsyncFunction<T>(data: T): boolean;
declare function IsSyncFunction<T>(data: T): boolean;
declare function IsArguments<T>(data: T): boolean;
declare function IsError<T>(data: T): boolean;
declare function IsEmpty<T>(data: T): boolean;
declare function IsEmptyArray<T>(data: T): boolean;
declare function IsEmptyObject<T extends object>(data: T): boolean;

declare function FormatCountdown(date: string | number | Date): string;
declare function FormatTimeDiff(date: string | number | Date, format?: string): string;

type TgtFunc<T> = (...args: T[]) => void;
declare function AsyncTo<T, U = Error>(pfn: Promise<T>, error?: object): Promise<[U, undefined] | [null, T]>;
declare function Debounce<T>(fn: TgtFunc<T>, dura?: number): TgtFunc<T>;
declare function Throttle<T>(fn: TgtFunc<T>, dura?: number): TgtFunc<T>;
declare function WaitFor(dura?: number): Promise<boolean>;

declare function CalcNum(type?: "+" | "-" | "*" | "/", num1?: number, num2?: number): number;
declare function CalcNumPlus(type?: "+" | "-" | "*" | "/", ...nums: number[]): number;
declare function FillNum(num?: number, len?: number): string;
declare function FixedNum(num?: number, dec?: number, mathType?: "ceil" | "floor" | "round"): number;
declare function FormatByte(byte?: number): string;
declare function RandomNum(min?: number, max?: number): number;
declare function RandomNumPlus(min?: number, max?: number, count?: number): number[];
declare function RoundNum(num?: number, dec?: number, per?: boolean): string | number;
declare function ThousandNum(num?: number): string;

type KeyOpts = string | number | symbol;
type ObjType<T> = {
    [key in KeyOpts]: T | "";
};
declare function CheckObjValidKey<T>(obj?: ObjType<T>, key?: KeyOpts): key is keyof typeof obj;
declare function FilterObjKey<T>(obj?: ObjType<T>, keys?: KeyOpts[]): ObjType<T>;
declare function RemoveObjEmptyKey<T>(obj?: ObjType<T>, clear?: boolean): void;

type FieldOpts = "address" | "count" | "date" | "email" | "idcard" | "image" | "name" | "number" | "password" | "phone";
interface CheckType {
    flag: boolean;
    msg: string;
}
declare function CheckText(type?: FieldOpts, text?: string): CheckType;
declare function CheckTextPlus(regexp: RegExp, text?: string, msg?: string): CheckType;
declare function MatchBracketText(tgt?: string, text?: string): string[];

declare function DesePhone(phone?: string): string;
declare function FormatPhone(phone?: string, sign?: "-" | " "): string;
declare function RandomColor(): string;
declare function RandomId(len?: number): string;
declare function RemoveTag(html?: string): string;
declare function ReverseText(text?: string): string;
declare function StartScore(rate?: number, len?: number): string;

export { AsyncTo, CalcNum, CalcNumPlus, CheckObjValidKey, CheckText, CheckTextPlus, ChunkArr, Debounce, DesePhone, EnvType, FillNum, FilterObjKey, FixedNum, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GroupArr, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, MatchBracketText, RandomColor, RandomId, RandomNum, RandomNumPlus, RemoveObjEmptyKey, RemoveTag, ReverseText, RoundNum, StartScore, StatArrMemCount, StatArrMemKeyword, StatArrMemPosition, ThousandNum, Throttle, TypeOf, WaitFor };
