/** Cookie工具 **/

interface CookieObj {
	[key: string]: string
}

/**
 * @name 读取Cookie
 */
function GetCookie(): CookieObj {
	const cookies = document.cookie;
	return cookies ? cookies.split("; ").reduce((t: CookieObj, v) => {
		const cookie = v.split("=");
		t[cookie[0]] = cookie[1];
		return t;
	}, {}) : {};
}

/**
 * @name 删除Cookie
 * @param {string} [key=""] 键
 */
function RemoveCookie(key: string = ""): void {
	SetCookie(key, "", -1);
}

/**
 * @name 设置Cookie
 * @param {string} [key=""] 键
 * @param {string} [val=""] 值
 * @param {number} [day=1] 过期时间(日)
 */
function SetCookie(key: string = "", val: string = "", day: number = 1): void {
	const date = new Date();
	date.setDate(date.getDate() + day);
	document.cookie = `${key}=${val};expires=${date.toString()}`;
}

export {
	GetCookie,
	RemoveCookie,
	SetCookie
};