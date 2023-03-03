/** 系统工具 **/
import { createConnection } from "net";
import { networkInterfaces } from "os";

import { AsyncTo } from "../common";

/**
 * @name 自动端口
 * @param {function} [cb] 回调函数
 * @param {string} [host=本机IP] 域名
 * @param {number} [port=80] 端口
 */
interface AutoPortType {
	cb?: (port: number) => void
	host?: string
	port: number
}

async function AutoPort({
	cb,
	host = GetIP(),
	port = 80
}: AutoPortType): Promise<void> {
	const res = await CheckPort({ host, port });
	if (res) {
		cb?.(port);
	} else {
		const _port = (port < 0 || port > 65535) ? 0 : (port + 1);
		await AutoPort({ cb, host, port: _port });
	}
}

/**
 * @name 检查端口
 * @param {string} [host=本机IP] 域名
 * @param {number} [port=80] 端口
 */
interface CheckPortType {
	host?: string
	port: number
}

async function CheckPort({
	host = GetIP(),
	port = 80
}: CheckPortType): Promise<boolean> {
	const promise = new Promise<boolean>(resolve => {
		if (port < 0 || port > 65535) {
			resolve(false); // 无法使用
		}
		const server = createConnection({ host, port });
		server.on("connect", () => {
			server.end();
			resolve(false); // 已占用
		});
		server.on("error", () => {
			resolve(true); // 未占用
		});
	});
	const [err, res] = await AsyncTo(promise);
	return err ? false : res;
}

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
	AutoPort,
	CheckPort,
	GetIP
};