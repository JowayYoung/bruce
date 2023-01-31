/** 数组工具 **/
type KeyType = string | number;

type ValueType = string | number | boolean;

type CountType = {
	[key in KeyType]: number
};

type GroupType = {
	[key in KeyType]: MemberType[]
};

type MemberType = {
	[key in KeyType]: string | number
};

/**
 * @name 分割数组
 * @param {array} [arr=[]] 数组
 * @param {number} [size=1] 尺寸
 */
function ChunkArr<T>(arr: T[] = [], size: number = 1): T[][] {
	return arr.length
		? arr.reduce((t: T[][], v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]])
		: [];
}

/**
 * @name 分组数组
 * @param {array} [arr=[]] 数组
 * @param {string|number} [key=""] 属性
 */
function GroupArr(arr: MemberType[] = [], key: KeyType = ""): GroupType {
	return key ? arr.reduce((t: GroupType, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}

/**
 * @name 统计数组成员个数
 * @param {array} [arr=[]] 数组
 */
function StatArrMemCount(arr: KeyType[] = []): CountType {
	return arr.reduce((t: CountType, v) => (t[v] = (t[v] || 0) + 1, t), {});
}

/**
 * @name 统计数组成员所含关键字
 * @param {array} [arr=[]] 数组
 * @param {array} [keywords=[]] 关键字集合
 */
function StatArrMemKeyword(arr: string[] = [], keywords: string[] = []): string[] {
	return keywords.reduce((t: string[], v) => (arr.some(w => w.includes(v)) && t.push(v), t), []);
}

/**
 * @name 记录数组成员位置
 * @param {array} [arr=[]] 数组
 * @param {string|number|boolean} [val] 值
 */
function StatArrMemPosition(arr: ValueType[] = [], val: ValueType): number[] {
	return arr.reduce((t: number[], v, i) => (v === val && t.push(i), t), []);
}

export {
	ChunkArr,
	GroupArr,
	StatArrMemCount,
	StatArrMemKeyword,
	StatArrMemPosition
};