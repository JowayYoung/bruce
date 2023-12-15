type KeyEnum$1 = string | number;
declare function ChunkArr<T>(arr?: T[], size?: number): T[][];
declare function GroupArr<T extends Record<K, KeyEnum$1>, K extends keyof T>(arr: T[] | undefined, key: K): Record<KeyEnum$1, T[]>;
type MemCountType = Record<KeyEnum$1, number>;
declare function StatArrMemCount(arr?: KeyEnum$1[]): MemCountType;
declare function StatArrMemKeyword(arr?: string[], keywords?: string[]): string[];
type MemValueEnum = string | number | boolean | null | undefined;
declare function StatArrMemPosition(arr: MemValueEnum[] | undefined, val: MemValueEnum): number[];

type EnvEnum = "web" | "node";
declare function EnvType(): EnvEnum;
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

type DateEnum = string | number | Date;
declare function FormatCountdown(date: DateEnum): string;
declare function FormatTimeDiff(date: DateEnum, format?: string): string;
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
declare function RemoveObjEmptyKey<T>(obj?: ObjType<T>, clear?: boolean): void;

type FieldEnum = "address" | "count" | "date" | "email" | "idcard" | "image" | "name" | "number" | "password" | "phone";
type MatchType = Record<FieldEnum, {
    msg: string;
    regexp: RegExp;
}>;
interface CheckType {
    flag: boolean;
    msg: string;
}
declare const MATCH: MatchType;
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

type CookieType = Record<string, string>;
declare function GetCookie(): CookieType;
declare function RemoveCookie(key?: string): void;
declare function SetCookie(key?: string, val?: string, day?: number): void;

declare function AutoResponse(size?: number, dir?: "x" | "y"): void;
declare function Base64ToFile(base64?: string, name?: string): File;
declare function CopyPaste(text?: string, elem?: HTMLElement): Promise<boolean>;
declare function DownloadFile(url?: string, name?: string): void;
declare function DownloadText(text?: string, name?: string): void;
declare function FilterXss(html?: string): string;
declare function HighlightText(text?: string, keyword?: string): string;
declare function ImgToBase64(url?: string, type?: "jpg" | "jpeg" | "png"): Promise<string>;
interface JsonpType<T> {
    name: string;
    onCall?: (data: T) => void;
    url: string;
}
declare function Jsonp<T>({ name, onCall, url }: JsonpType<T>): Promise<boolean>;
declare function LoadScript(url?: string, pst?: "body" | "head"): Promise<boolean>;
type EventEnum = "contextmenu" | "copy" | "selectstart";
declare function ProhibitEvent(events?: EventEnum[]): void;

interface ResponseType<T> {
    code: number;
    data: T | null;
    flag: boolean;
    msg: string;
}
declare function Aios<T>({ data, headers, method, progress, timeout, url, useCookie, useJson }: {
    data?: Record<string | number, string | number | boolean | null | undefined>;
    headers?: object;
    method?: "get" | "post";
    progress?: (p: object) => void;
    timeout?: number;
    url: string;
    useCookie?: boolean;
    useJson?: boolean;
}): Promise<[Error | null, ResponseType<T> | null]>;
declare function Ajax({ data, error, success, type, url }: {
    data?: Record<string, string>;
    error?: (status: number) => void;
    success?: (res: string) => void;
    type?: "get" | "post";
    url: string;
}): void;

declare function ClearLStorage(): void;
declare function ClearSStorage(): void;
declare function GetLStorage<T>(key?: string): T;
declare function GetSStorage<T>(key?: string): T;
declare function RemoveLStorage(key?: string): void;
declare function RemoveSStorage(key?: string): void;
declare function SetLStorage<T>(key: string | undefined, val: T): void;
declare function SetSStorage<T>(key: string | undefined, val: T): void;

type EngineEnum = "webkit" | "gecko" | "presto" | "trident";
type PlatformEnum = "desktop" | "mobile";
type ShellEnum = "uc" | "qq" | "sougou" | "maxthon" | "2345" | "360" | "liebao" | "xiaomi" | "huawei" | "oppo" | "vivo" | "wechat" | "baidu" | "toutiao";
type SupporterEnum = "chrome" | "safari" | "edge" | "firefox" | "opera" | "iexplore";
type SystemEnum = "windows" | "macos" | "linux" | "android" | "ios";
declare function WebType(ua?: string): {
    engine: EngineEnum | "unknow";
    engineVs: string;
    platform: PlatformEnum;
    supporter: SupporterEnum | "unknow";
    supporterVs: string;
    system: SystemEnum | "unknow";
    systemVs: string;
    shell?: ShellEnum | "none";
    shellVs?: string;
};

type SearchType = Record<string, string>;
type SearchObjType = Record<string, string | number | boolean | null | undefined>;
interface AppConfigType {
    download: string;
    downloadAndroid: string;
    downloadIos: string;
    downloadYyb?: string;
    host: string;
    params?: Record<string, string>;
    path: string;
    protocol: string;
}
interface AppOptionType {
    debug?: boolean;
    fail?: () => void;
    start?: () => void;
    startWechat?: () => void;
    timeout?: number;
}
declare class CallApp {
    protected option: AppOptionType;
    protected scheme: string;
    protected link: string;
    constructor(conf?: AppConfigType, opts?: AppOptionType);
    protected fallback(): void;
    onCall(): void;
}
declare function ParseUrlSearch(): SearchType;
declare function RemoveUrlSearch(params?: string[]): void;
declare function SetUrlSearch(search?: SearchObjType): void;
declare function StringifyUrlSearch(search?: SearchObjType, clear?: boolean): string;

export { Aios, Ajax, AsyncTo, AutoResponse, Base64ToFile, CalcNum, CalcNumPlus, CallApp, CheckObjValidKey, CheckText, CheckTextPlus, ChunkArr, ClearLStorage, ClearSStorage, CopyPaste, Debounce, DesePhone, DownloadFile, DownloadText, EnvType, FillNum, FilterObjKey, FilterXss, FixedNum, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GetCookie, GetLStorage, GetSStorage, GroupArr, HighlightText, ImgToBase64, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, Jsonp, LoadScript, MATCH, MatchBracketText, ParseUrlSearch, ProhibitEvent, RandomColor, RandomId, RandomNum, RandomNumPlus, RecentMonths, RemoveCookie, RemoveLStorage, RemoveObjEmptyKey, RemoveSStorage, RemoveTag, RemoveUrlSearch, ReverseText, RoundNum, SetCookie, SetLStorage, SetSStorage, SetUrlSearch, StartScore, StatArrMemCount, StatArrMemKeyword, StatArrMemPosition, StringifyUrlSearch, ThousandNum, Throttle, TypeOf, WaitFor, WebType };
