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

type InfoType$1 = "web" | "node";
declare function EnvType(): InfoType$1;
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

type TgtFunc$1<T> = (...args: T[]) => void;
declare function AsyncTo<T, U = Error>(pfn: Promise<T>, error?: object): Promise<[U, undefined] | [null, T]>;
declare function Debounce<T>(fn: TgtFunc$1<T>, dura?: number): TgtFunc$1<T>;
declare function Throttle<T>(fn: TgtFunc$1<T>, dura?: number): TgtFunc$1<T>;
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

interface CookieType {
    [key: string]: string;
}
declare function GetCookie(): CookieType;
declare function RemoveCookie(key?: string): void;
declare function SetCookie(key?: string, val?: string, day?: number): void;

type EventOpts = "contextmenu" | "copy" | "selectstart";
type TgtFunc<T> = (d: T) => void;
declare function AutoResponse(width?: number): void;
declare function Base64ToFile(base64?: string, name?: string): File;
declare function CopyPaste(elem?: HTMLElement): void;
declare function DownloadFile(url?: string, name?: string): void;
declare function DownloadText(text?: string, name?: string): void;
declare function FilterXss(html?: string): string;
declare function HighlightText(text?: string, keyword?: string): string;
declare function ImgToBase64(url?: string, type?: "jpg" | "jpeg" | "png"): Promise<string>;
declare function Jsonp<T>(url?: string, name?: string, cb?: TgtFunc<T>): Promise<boolean>;
declare function LoadScript(url?: string, pst?: "body" | "head"): Promise<boolean>;
declare function ProhibitEvent(events?: EventOpts[]): void;

interface AjaxType {
    data?: {
        [key: string]: string;
    };
    error?: (status: number) => void;
    success?: (res: string) => void;
    type?: "get" | "post";
    url: string;
}
interface RequestType {
    data?: {
        [key: string]: string | number;
    };
    headers?: object;
    method?: "get" | "post";
    progress?: (p: object) => void;
    url: string;
    useJson?: boolean;
}
interface ResponseType<T> {
    code: number;
    data: T | null;
    flag: boolean;
    msg: string;
}
declare function Aios<T>({ data, headers, method, progress, url, useJson }: RequestType): Promise<[Error | null, ResponseType<T> | null]>;
declare function Ajax({ data, error, success, type, url }: AjaxType): void;

declare function ClearLStorage(): void;
declare function ClearSStorage(): void;
declare function GetLStorage<T>(key?: string): T;
declare function GetSStorage<T>(key?: string): T;
declare function RemoveLStorage(key?: string): void;
declare function RemoveSStorage(key?: string): void;
declare function SetLStorage<T>(key: string | undefined, val: T): void;
declare function SetSStorage<T>(key: string | undefined, val: T): void;

type EngineOpts = "webkit" | "gecko" | "presto" | "trident";
type PlatformOpts = "desktop" | "mobile";
type ShellOpts = "uc" | "qq" | "sougou" | "maxthon" | "2345" | "360" | "liebao" | "xiaomi" | "huawei" | "oppo" | "vivo" | "wechat" | "baidu" | "toutiao";
type SupporterOpts = "chrome" | "safari" | "edge" | "firefox" | "opera" | "iexplore";
type SystemOpts = "windows" | "macos" | "linux" | "android" | "ios";
interface InfoType {
    engine: EngineOpts | "unknow";
    engineVs: string;
    platform: PlatformOpts;
    supporter: SupporterOpts | "unknow";
    supporterVs: string;
    system: SystemOpts | "unknow";
    systemVs: string;
    shell?: ShellOpts | "none";
    shellVs?: string;
}
declare function WebType(ua?: string): InfoType;

interface SearchType {
    [key: string]: string | number;
}
declare function ParseUrlSearch(): SearchType;
declare function RemoveUrlSearch(params?: string[]): void;
declare function SetUrlSearch(search?: SearchType): void;
declare function StringifyUrlSearch(search?: SearchType, clear?: boolean): string;

export { Aios, Ajax, AsyncTo, AutoResponse, Base64ToFile, CalcNum, CalcNumPlus, CheckObjValidKey, CheckText, CheckTextPlus, ChunkArr, ClearLStorage, ClearSStorage, CopyPaste, Debounce, DesePhone, DownloadFile, DownloadText, EnvType, FillNum, FilterObjKey, FilterXss, FixedNum, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GetCookie, GetLStorage, GetSStorage, GroupArr, HighlightText, ImgToBase64, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, Jsonp, LoadScript, MatchBracketText, ParseUrlSearch, ProhibitEvent, RandomColor, RandomId, RandomNum, RandomNumPlus, RemoveCookie, RemoveLStorage, RemoveObjEmptyKey, RemoveSStorage, RemoveTag, RemoveUrlSearch, ReverseText, RoundNum, SetCookie, SetLStorage, SetSStorage, SetUrlSearch, StartScore, StatArrMemCount, StatArrMemKeyword, StatArrMemPosition, StringifyUrlSearch, ThousandNum, Throttle, TypeOf, WaitFor, WebType };
