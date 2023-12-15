import { CopyFilterSync } from 'fs-extra';

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

declare function AbsPath(path?: string, dir?: string): string;
declare function CheckPath(path?: string, dir?: string): boolean;
declare function CopyDir({ dist, distDir, filter, src, srcDir }: {
    dist: string;
    distDir?: string;
    filter?: CopyFilterSync;
    src: string;
    srcDir?: string;
}): void;
declare function CreateDir(path?: string, dir?: string): void;
declare function ReadDir({ dir, path, regexp, type }: {
    dir?: string;
    path: string;
    regexp?: RegExp;
    type?: "bfs" | "dfs";
}): string[];
declare function ReadJson<T>(path?: string, dir?: string): T | null;
declare function ReadYaml<T>(path?: string, dir?: string): T | null;
declare function RemoveDir(path?: string, dir?: string): void;
declare function VerifyPath(path?: string, dir?: string): {
    flag: boolean;
    msg: string;
};

declare function AutoPort({ host, onCall, port }: {
    host?: string;
    onCall?: (port: number) => void;
    port: number;
}): Promise<void>;
declare function CheckPort({ host, port }: {
    host?: string;
    port: number;
}): Promise<boolean>;
declare function GetIP(): string;

declare function RunCmd(cmd?: string): string;

type SystemEnum = "windows" | "macos" | "linux";
declare function NodeType(): {
    nodeVs: string;
    npmVs: string;
    system: SystemEnum;
    systemVs: string;
};

export { AbsPath, AsyncTo, AutoPort, CalcNum, CalcNumPlus, CheckObjValidKey, CheckPath, CheckPort, CheckText, CheckTextPlus, ChunkArr, CopyDir, CreateDir, Debounce, DesePhone, EnvType, FillNum, FilterObjKey, FixedNum, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GetIP, GroupArr, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, MATCH, MatchBracketText, NodeType, RandomColor, RandomId, RandomNum, RandomNumPlus, ReadDir, ReadJson, ReadYaml, RecentMonths, RemoveDir, RemoveObjEmptyKey, RemoveTag, ReverseText, RoundNum, RunCmd, StartScore, StatArrMemCount, StatArrMemKeyword, StatArrMemPosition, ThousandNum, Throttle, TypeOf, VerifyPath, WaitFor };
