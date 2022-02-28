interface KeyArr {
    [index: string | number]: string | number;
}
interface GroupObj {
    [key: string | number]: KeyArr[];
}
interface CountObj {
    [key: string | number]: number;
}
declare function GroupArrKey(arr?: KeyArr[], key?: string): GroupObj;
declare function RecordArrPosition(arr: (string | number | boolean)[] | undefined, val: string | number | boolean): number[];
declare function StatArrCount(arr?: Array<string | number>): CountObj;
declare function StatArrKeyword(arr?: string[], keys?: string[]): string[];

declare function EnvType(): string;
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
declare function IsEmptyObject<T>(data: T): boolean;

declare function FormatCountdown(date: string | number | Date): string;
declare function FormatTimeDiff(date: string | number | Date): string;

declare type TgtFunc<T> = (...args: T[]) => void;
declare function AsyncTo<T, U = Error>(pfn: Promise<T>, error?: object): Promise<[U, undefined] | [null, T]>;
declare function Debounce<T>(fn: TgtFunc<T>, dura?: number): TgtFunc<T>;
declare function Throttle<T>(fn: TgtFunc<T>, dura?: number): TgtFunc<T>;
declare function WaitFor(dura?: number): Promise<boolean>;

declare function FillNum(num?: number, len?: number): string;
declare function FormatByte(byte?: number): string;
declare function RandomNum(min?: number, max?: number): number;
declare function RandomNumPlus(min?: number, max?: number, count?: number): number[];
declare function RoundNum(num?: number, dec?: number, per?: boolean): string | number;
declare function ThousandNum(num?: number): string;

interface Obj<T> {
    [key: string | number]: T;
}
declare function FilterObj<T>(obj?: Obj<T>, keys?: Array<string | number>): Obj<T>;

interface CheckObj {
    flag: boolean;
    msg: string;
}
declare function CheckText(type?: string, text?: string): CheckObj;
declare function CheckTextPlus(regexp: RegExp, text?: string, msg?: string): CheckObj;
declare function MatchBracketText(tgt?: string, text?: string): string[];

declare function DesePhone(phone?: string): string;
declare function FormatPhone(phone?: string, sign?: string): string;
declare function RandomColor(): string;
declare function RandomId(len?: number): string;
declare function RemoveTag(text?: string): string;
declare function ReverseText(text?: string): string;
declare function StartScore(rate?: number, len?: number): string;

declare type FilterFunc = (src: string, dist: string) => boolean;
declare function AbsPath(path?: string, dir?: string): string;
declare function CopyDir(src: string | undefined, dist: string | undefined, filter: FilterFunc): void;
declare function CreateDir(dir?: string): void;
declare function ReadDir(type?: string, dir?: string, filter?: RegExp): string[];
declare function ReadJson(path?: string, dir?: string): object;
declare function RemoveDir(dir?: string): void;

declare function GetIP(): string;

declare function RunCmd(cmd?: string): string;

interface NodeObj {
    nodeVs: string;
    npmVs: string;
    system: string;
    systemVs: string;
}
declare function NodeType(): NodeObj;

interface CookieObj {
    [key: string]: string;
}
declare function GetCookie(): CookieObj;
declare function RemoveCookie(key?: string): void;
declare function SetCookie(key?: string, val?: string, day?: number): void;

declare function AutoResponse(width?: number): void;
declare function CopyPaste(elem?: HTMLElement): void;
declare function DownloadFile(url?: string, name?: string): void;
declare function FilterXss(html?: string): string;
declare function Img2Base64(url?: string, type?: string): Promise<string>;
declare function Jsonp<T>(url?: string, name?: string, cb?: null | ((d: T) => T)): Promise<boolean>;
declare function LoadScript(url?: string, pst?: string): Promise<boolean>;

interface AjaxObj {
    data: {
        [key: string]: string;
    };
    error: null | ((status: number) => void);
    success: null | ((res: string) => void);
    type: string;
    url: string;
}
declare function Ajax({ data, error, success, type, url }: AjaxObj): void;

declare function ClearLStorage(): void;
declare function ClearSStorage(): void;
declare function GetLStorage<T>(key?: string): T;
declare function GetSStorage<T>(key?: string): T;
declare function RemoveLStorage(key?: string): void;
declare function RemoveSStorage(key?: string): void;
declare function SetLStorage<T>(key: string | undefined, val: T): void;
declare function SetSStorage<T>(key: string | undefined, val: T): void;

interface WebObj {
    engine: string;
    engineVs: string;
    platform: string;
    supporter: string;
    supporterVs: string;
    system: string;
    systemVs: string;
    shell?: string;
    shellVs?: string;
}
declare function WebType(ua?: string): WebObj;

interface SearchObj {
    [key: string]: string;
}
declare function ParseUrlSearch(): SearchObj;
declare function RemoveUrlSearch(...search: string[]): void;
declare function SetUrlSearch(search?: SearchObj): void;
declare function StringifyUrlSearch(search?: SearchObj, clear?: boolean): string;

export { AbsPath, Ajax, AsyncTo, AutoResponse, CheckText, CheckTextPlus, ClearLStorage, ClearSStorage, CopyDir, CopyPaste, CreateDir, Debounce, DesePhone, DownloadFile, EnvType, FillNum, FilterObj, FilterXss, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GetCookie, GetIP, GetLStorage, GetSStorage, GroupArrKey, Img2Base64, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, Jsonp, LoadScript, MatchBracketText, NodeType, ParseUrlSearch, RandomColor, RandomId, RandomNum, RandomNumPlus, ReadDir, ReadJson, RecordArrPosition, RemoveCookie, RemoveDir, RemoveLStorage, RemoveSStorage, RemoveTag, RemoveUrlSearch, ReverseText, RoundNum, RunCmd, SetCookie, SetLStorage, SetSStorage, SetUrlSearch, StartScore, StatArrCount, StatArrKeyword, StringifyUrlSearch, ThousandNum, Throttle, TypeOf, WaitFor, WebType };
