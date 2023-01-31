/** 对象工具 **/
type KeyOpts = string | number | symbol;

type ObjType<T> = {
	[key in KeyOpts]: T | ""
};

/**
 * @name 检查对象有效键名
 * @param {object} [obj={}] 对象
 * @param {string|number|symbol} [key=""] 键名
 */
function CheckObjValidKey<T>(obj: ObjType<T> = {}, key: KeyOpts = ""): key is keyof typeof obj {
	return key in obj;
}

/**
 * @name 过滤对象键名
 * @param {object} [obj={}] 对象
 * @param {array} [keys=[]] 键名集合
 */
function FilterObjKey<T>(obj: ObjType<T> = {}, keys: KeyOpts[] = []): ObjType<T> {
	return Object.keys(obj).reduce((t: ObjType<T>, v) => (keys.includes(v) && (t[v] = obj[v]), t), {});
}

/**
 * @name 删除对象空键
 * @param {object} [obj={}] 对象
 * @param {boolean} [clear=false] 清除假值
 */
function RemoveObjEmptyKey<T>(obj: ObjType<T> = {}, clear: boolean = false): void {
	for (const key in obj) {
		if ({}.hasOwnProperty.call(obj, key)) {
			const val = obj[key];
			const flag = clear ? !val : val === "";
			flag && delete obj[key];
		}
	}
}

export {
	CheckObjValidKey,
	FilterObjKey,
	RemoveObjEmptyKey
};