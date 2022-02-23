/** 数组工具 **/

interface KeyArr {
	[index: string|number]: string|number
}

interface GroupObj {
	[key: string|number]: KeyArr[]
}

interface CountObj {
	[key: string|number]: number
}

/**
 * @name 分组成员特性
 * @param {array} [arr=[]] 数组
 * @param {string} [key=""] 属性
 */
function GroupArrKey(arr: KeyArr[] = [], key: string = ""): GroupObj {
	return key ? arr.reduce((t: GroupObj, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}

/**
 * @name 记录成员位置
 * @param {array} [arr=[]] 数组
 * @param {string|number|boolean} [val] 值
 */
function RecordArrPosition(arr: Array<string|number|boolean> = [], val: string|number|boolean): number[] {
	return arr.reduce((t: number[], v, i) => (v === val && t.push(i), t), []);
}

/**
 * @name 统计成员个数
 * @param {array} [arr=[]] 数组
 */
function StatArrCount(arr: Array<string|number> = []): CountObj {
	return arr.reduce((t: CountObj, v) => (t[v] = (t[v] || 0) + 1, t), {});
}

/**
 * @name 统计成员所含关键字
 * @param {array} [arr=[]] 数组
 * @param {array} [keys=[]] 关键字集合
 */
function StatArrKeyword(arr: string[] = [], keys: string[] = []): string[] {
	return keys.reduce((t: string[], v) => (arr.some(w => w.includes(v)) && t.push(v), t), []);
}

export {
	GroupArrKey,
	RecordArrPosition,
	StatArrCount,
	StatArrKeyword
};