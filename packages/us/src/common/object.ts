/** 对象工具 **/

interface Obj<T> {
	[key: string|number]: T
}

/**
 * @name 过滤对象
 * @param {object} [obj={}] 对象
 * @param {array} [keys=[]] 键集合
 */
function FilterObj<T>(obj: Obj<T> = {}, keys: Array<string|number> = []): Obj<T> {
	return Object.keys(obj).reduce((t: Obj<T>, v) => (keys.includes(v) && (t[v] = obj[v]), t), {});
}

export {
	FilterObj
};