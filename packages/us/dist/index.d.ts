type KeyEnum$1 = string | number;
declare function ChunkArr<T>(arr?: T[], size?: number): T[][];
declare function GroupArr<T extends Record<K, KeyEnum$1>, K extends keyof T>(arr: T[] | undefined, key: K): Record<KeyEnum$1, T[]>;
type MemCountType = Record<KeyEnum$1, number>;
declare function StatArrMemCount(arr?: KeyEnum$1[]): MemCountType;
declare function StatArrMemKeyword(arr?: string[], keywords?: string[]): string[];
type MemValueEnum = string | number | boolean | null | undefined;
declare function StatArrMemPosition(arr: MemValueEnum[] | undefined, val: MemValueEnum): number[];

declare function EnvType(): "web" | "node";
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
declare function IsFormData<T>(data: T): boolean;
declare function IsElement<T>(data: T): boolean;
declare function IsAsyncFunction<T>(data: T): boolean;
declare function IsSyncFunction<T>(data: T): boolean;
declare function IsArguments<T>(data: T): boolean;
declare function IsError<T>(data: T): boolean;
declare function IsEmpty<T>(data: T): boolean;
declare function IsEmptyArray<T>(data: T): boolean;
declare function IsEmptyObject<T extends object>(data: T): boolean;

type DateEnum = string | number | Date;
declare function FormatCountdown(date?: DateEnum): string;
declare function FormatTimeDiff(date?: DateEnum, format?: string): string;
declare function RecentMonths(count?: number, format?: string): string[];

type TgtFunc<T, R> = (...args: T[]) => R;
declare function AsyncTo<T, U = Error>(pfn: Promise<T>, error?: object): Promise<[U, undefined] | [null, T]>;
declare function Debounce<T, R>(fn: TgtFunc<T, R>, delay?: number): TgtFunc<T, R>;
declare function Throttle<T, R>(fn: TgtFunc<T, R>, delay?: number): TgtFunc<T, R>;
declare function WaitFor(delay?: number): Promise<boolean>;

type OperationEnum = "+" | "-" | "*" | "/";
declare function CalcNum(type?: OperationEnum, num1?: number, num2?: number): number;
declare function CalcNumPlus(type?: OperationEnum, ...nums: number[]): number;
declare function FillNum(num?: number, len?: number): string;
declare function FixedNum({ dec, num, type }: {
    dec?: number;
    num: number;
    type?: "ceil" | "floor" | "round";
}): number;
declare function FormatByte(byte?: number): string;
declare function RandomNum(min?: number, max?: number): number;
declare function RandomNumPlus(min?: number, max?: number, count?: number): number[];
declare function RoundNum({ dec, num, per }: {
    dec?: number;
    num: number;
    per?: boolean;
}): string | number;
declare function ThousandNum(num?: number): string;

type KeyEnum = string | number | symbol;
type ObjType<T> = Record<KeyEnum, T | "">;
declare function CheckObjValidKey<T>(obj?: ObjType<T>, key?: KeyEnum): key is keyof typeof obj;
declare function FilterObjKey<T>(obj?: ObjType<T>, keys?: KeyEnum[]): ObjType<T>;
declare function RemoveObjEmptyKey<T>(obj?: ObjType<T>, clear?: boolean): ObjType<T>;

type FieldEnum = "address" | "count" | "date" | "email" | "idcard" | "image" | "name" | "number" | "password" | "phone";
interface CheckType {
    flag: boolean;
    msg: string;
}
declare const MATCH: Record<FieldEnum, {
    msg: string;
    regexp: RegExp;
}>;
declare function CheckText(type?: FieldEnum, text?: string): CheckType;
declare function CheckTextPlus(regexp: RegExp, text?: string, msg?: string): CheckType;
declare function MatchBracketText(tgt?: string, text?: string): string[];

declare function DesePhone(phone?: string): string;
declare function FormatPhone(phone?: string, sign?: "-" | " "): string;
declare function RandomColor(): string;
declare function RandomId(len?: number): string;
declare function RemoveTag(html?: string): string;
declare function ReverseText(text?: string): string;
declare function StartScore(rate?: number, len?: number): string;

type EngineEnum = "webkit" | "gecko" | "presto" | "trident";
type PlatformEnum = "desktop" | "mobile";
type ShellEnum = "uc" | "qq" | "sougou" | "maxthon" | "2345" | "360" | "liebao" | "xiaomi" | "huawei" | "oppo" | "vivo" | "wechat" | "baidu" | "toutiao";
type SupporterEnum = "chrome" | "safari" | "edge" | "firefox" | "opera" | "iexplore";
type SystemEnum = "windows" | "macos" | "linux" | "android" | "ios";
interface WebsType {
    engine: EngineEnum | "unknow";
    engineVs: string;
    platform: PlatformEnum;
    supporter: SupporterEnum | "unknow";
    supporterVs: string;
    system: SystemEnum | "unknow";
    systemVs: string;
    shell?: ShellEnum | "none";
    shellVs?: string;
}
declare function WebType(ua?: string): WebsType;

type DataType = Record<string | number, string | number | boolean | null | undefined>;
type SearchType = Record<string, string>;
declare function ParseUrlSearch(search?: string): SearchType;
declare function StringifyUrlSearch(search?: DataType, clear?: boolean): string;

export { AsyncTo, CalcNum, CalcNumPlus, CheckObjValidKey, CheckText, CheckTextPlus, ChunkArr, Debounce, DesePhone, EnvType, FillNum, FilterObjKey, FixedNum, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GroupArr, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFormData, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, MATCH, MatchBracketText, ParseUrlSearch, RandomColor, RandomId, RandomNum, RandomNumPlus, RecentMonths, RemoveObjEmptyKey, RemoveTag, ReverseText, RoundNum, StartScore, StatArrMemCount, StatArrMemKeyword, StatArrMemPosition, StringifyUrlSearch, ThousandNum, Throttle, TypeOf, WaitFor, WebType };
