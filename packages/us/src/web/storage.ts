/** Storage工具 **/

/**
 * @name 清空LocalStorage
 */
function ClearLStorage(): void {
	localStorage.clear();
}

/**
 * @name 清空SessionStorage
 */
function ClearSStorage(): void {
	sessionStorage.clear();
}

/**
 * @name 读取LocalStorage
 * @param {string} [key=""] 键
 */
function GetLStorage<T>(key: string = ""): T {
	const item = localStorage.getItem(key);
	return item ? JSON.parse(item) : null;
}

/**
 * @name 读取SessionStorage
 * @param {string} [key=""] 键
 */
function GetSStorage<T>(key: string = ""): T {
	const item = sessionStorage.getItem(key);
	return item ? JSON.parse(item) : null;
}

/**
 * @name 删除LocalStorage
 * @param {string} [key=""] 键
 */
function RemoveLStorage(key: string = ""): void {
	localStorage.removeItem(key);
}

/**
 * @name 删除SessionStorage
 * @param {string} [key=""] 键
 */
function RemoveSStorage(key: string = ""): void {
	sessionStorage.removeItem(key);
}

/**
 * @name 设置LocalStorage
 * @param {string} [key=""] 键
 * @param {string} [val=""] 值
 */
function SetLStorage<T>(key: string = "", val: T): void {
	localStorage.setItem(key, JSON.stringify(val));
}

/**
 * @name 设置SessionStorage
 * @param {string} [key=""] 键
 * @param {string} [val=""] 值
 */
function SetSStorage<T>(key: string = "", val: T): void {
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