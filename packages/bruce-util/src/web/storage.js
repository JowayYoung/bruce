/** Storage工具 **/

/**
 * @name 清空LocalStorage
 */
function ClearLStorage() {
	localStorage.clear();
}

/**
 * @name 清空SessionStorage
 */
function ClearSStorage() {
	sessionStorage.clear();
}

/**
 * @name 读取LocalStorage
 * @param {string} [key=""] 键
 */
function GetLStorage(key = "") {
	return JSON.parse(localStorage.getItem(key));
}

/**
 * @name 读取SessionStorage
 * @param {string} [key=""] 键
 */
function GetSStorage(key = "") {
	return JSON.parse(sessionStorage.getItem(key));
}

/**
 * @name 移除LocalStorage
 * @param {string} [key=""] 键
 */
function RemoveLStorage(key = "") {
	localStorage.removeItem(key);
}

/**
 * @name 移除SessionStorage
 * @param {string} [key=""] 键
 */
function RemoveSStorage(key = "") {
	sessionStorage.removeItem(key);
}

/**
 * @name 设置LocalStorage
 * @param {string} [key=""] 键
 * @param {string} [val=""] 值
 */
function SetLStorage(key = "", val = "") {
	localStorage.setItem(key, JSON.stringify(val));
}

/**
 * @name 设置SessionStorage
 * @param {string} [key=""] 键
 * @param {string} [val=""] 值
 */
function SetSStorage(key = "", val = "") {
	sessionStorage.setItem(key, JSON.stringify(val));
}

export {
	ClearLStorage,
	ClearSStorage,
	GetLStorage,
	GetSStorage,
	RemoveLStorage,
	RemoveSStorage,
	SetLStorage,
	SetSStorage
};

export default {
	ClearLStorage,
	ClearSStorage,
	GetLStorage,
	GetSStorage,
	RemoveLStorage,
	RemoveSStorage,
	SetLStorage,
	SetSStorage
};