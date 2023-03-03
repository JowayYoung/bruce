type KeyOpts$1 = string | number;
declare function ChunkArr<T>(arr?: T[], size?: number): T[][];
type MemberType = Record<KeyOpts$1, string | number>;
type GroupType = Record<KeyOpts$1, MemberType[]>;
declare function GroupArr(arr?: MemberType[], key?: KeyOpts$1): GroupType;
type CountType = Record<KeyOpts$1, number>;
declare function StatArrMemCount(arr?: KeyOpts$1[]): CountType;
declare function StatArrMemKeyword(arr?: string[], keywords?: string[]): string[];
type ValueOpts = string | number | boolean;
declare function StatArrMemPosition(arr: ValueOpts[] | undefined, val: ValueOpts): number[];

type EnvOpts = "web" | "node";
declare function EnvType(): EnvOpts;
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

type DateOpts = string | number | Date;
declare function FormatCountdown(date: DateOpts): string;
declare function FormatTimeDiff(date: DateOpts, format?: string): string;

type TgtFunc<T> = (...args: T[]) => void;
declare function AsyncTo<T, U = Error>(pfn: Promise<T>, error?: object): Promise<[U, undefined] | [null, T]>;
declare function Debounce<T>(fn: TgtFunc<T>, dura?: number): TgtFunc<T>;
declare function Throttle<T>(fn: TgtFunc<T>, dura?: number): TgtFunc<T>;
declare function WaitFor(dura?: number): Promise<boolean>;

type OperationOpts = "+" | "-" | "*" | "/";
declare function CalcNum(type?: OperationOpts, num1?: number, num2?: number): number;
declare function CalcNumPlus(type?: OperationOpts, ...nums: number[]): number;
declare function FillNum(num?: number, len?: number): string;
interface FixedNumType {
    dec?: number;
    num: number;
    type?: "ceil" | "floor" | "round";
}
declare function FixedNum({ dec, num, type }: FixedNumType): number;
declare function FormatByte(byte?: number): string;
declare function RandomNum(min?: number, max?: number): number;
declare function RandomNumPlus(min?: number, max?: number, count?: number): number[];
interface RoundNumType {
    dec?: number;
    num: number;
    per?: boolean;
}
declare function RoundNum({ dec, num, per }: RoundNumType): string | number;
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

declare function AbsPath(path?: string, dir?: string): string;
declare function CheckPath(path?: string, dir?: string): boolean;
interface CopyDirType {
    dist: string;
    filter?: (src: string, dist: string) => boolean;
    src: string;
}
declare function CopyDir({ dist, filter, src }: CopyDirType): void;
declare function CreateDir(dir?: string): void;
interface ReadDirType {
    dir: string;
    regexp?: RegExp;
    type?: "bfs" | "dfs";
}
declare function ReadDir({ dir, regexp, type }: ReadDirType): string[];
declare function ReadJson(path?: string, dir?: string): object;
declare function ReadYaml(path?: string, dir?: string): object;
declare function RemoveDir(dir?: string): void;

interface AutoPortType {
    cb?: (port: number) => void;
    host?: string;
    port: number;
}
declare function AutoPort({ cb, host, port }: AutoPortType): Promise<void>;
interface CheckPortType {
    host?: string;
    port: number;
}
declare function CheckPort({ host, port }: CheckPortType): Promise<boolean>;
declare function GetIP(): string;

declare function RunCmd(cmd?: string): string;

type SystemOpts = "windows" | "macos" | "linux";
interface InfoType {
    nodeVs: string;
    npmVs: string;
    system: SystemOpts;
    systemVs: string;
}
declare function NodeType(): InfoType;

export { AbsPath, AsyncTo, AutoPort, CalcNum, CalcNumPlus, CheckObjValidKey, CheckPath, CheckPort, CheckText, CheckTextPlus, ChunkArr, CopyDir, CreateDir, Debounce, DesePhone, EnvType, FillNum, FilterObjKey, FixedNum, FormatByte, FormatCountdown, FormatPhone, FormatTimeDiff, GetIP, GroupArr, IsArguments, IsArray, IsAsyncFunction, IsBoolean, IsClass, IsDate, IsElement, IsEmpty, IsEmptyArray, IsEmptyObject, IsError, IsFunction, IsMap, IsNode, IsNull, IsNumber, IsObject, IsRegExp, IsSet, IsString, IsSymbol, IsSyncFunction, IsUndefined, IsWeakMap, IsWeakSet, IsWeb, MatchBracketText, NodeType, RandomColor, RandomId, RandomNum, RandomNumPlus, ReadDir, ReadJson, ReadYaml, RemoveDir, RemoveObjEmptyKey, RemoveTag, ReverseText, RoundNum, RunCmd, StartScore, StatArrMemCount, StatArrMemKeyword, StatArrMemPosition, ThousandNum, Throttle, TypeOf, WaitFor };
