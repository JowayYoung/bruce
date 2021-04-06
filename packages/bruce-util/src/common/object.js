/** 对象工具 **/

/**
 * @name 读取属性
 * @param {*} [obj={}] 对象
 * @param {*} [keys=[]] 属性集合
 */
function GetKeys(obj = {}, keys = []) {
	return Object.keys(obj).reduce((t, v) => (keys.includes(v) && (t[v] = obj[v]), t), {});
}

export {
	GetKeys
};

export default {
	GetKeys
};