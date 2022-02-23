/** 系统工具 **/
import { networkInterfaces } from "os";

/**
 * @name 读取IP
 */
function GetIP(): string {
	const ip = "127.0.0.1";
	const obj = networkInterfaces();
	for (const k in obj) {
		const val = obj[k] ?? [];
		for (let i = 0; i < val.length; i++) {
			const { address, family, internal } = val[i];
			if (family === "IPv4" && address !== ip && !internal) {
				return address;
			}
		}
	}
	return ip;
}

export {
	GetIP
};