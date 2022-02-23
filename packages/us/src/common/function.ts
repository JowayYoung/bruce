/** 函数工具 **/

type TgtFunc<T> = (...args: T[]) => void;

/**
 * @name 格式异步返回值
 * @param {function} [pfn] Promise函数
 */
async function AsyncTo<T, U = Error>(pfn: Promise<T>, error?: object): Promise<[U, undefined]|[null, T]> {
	return await pfn
		.then<[null, T]>((data: T) => [null, data])
		.catch<[U, undefined]>((err: U) => [error ? Object.assign({}, err, error) : err, undefined]);
}

/**
 * @name 防抖
 * @param {function} [fn] 函数
 * @param {number} [dura=50] 时延
 */
function Debounce<T>(fn: TgtFunc<T>, dura: number = 50): TgtFunc<T> {
	let timer: ReturnType<typeof setTimeout>;
	return function(this: object, ...args: T[]) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), dura);
	};
}

/**
 * @name 节流
 * @param {function} [fn] 函数
 * @param {number} [dura=50] 时延
 */
function Throttle<T>(fn: TgtFunc<T>, dura: number = 50): TgtFunc<T> {
	let timer: ReturnType<typeof setTimeout>;
	let lock = false;
	let lastTime = 0;
	return function(this: object, ...args: T[]) {
		if (lock) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				if (Date.now() - lastTime >= dura) {
					fn.apply(this, args);
					lastTime = Date.now();
				}
			}, Math.max(dura - (Date.now() - lastTime), 0));
		} else {
			fn.apply(this, args);
			lastTime = Date.now();
			lock = true;
		}
	};
}

/**
 * @name 等待
 * @param {number} [dura=1000] 时延
 */
async function WaitFor(dura: number = 1000): Promise<boolean> {
	return await new Promise(resolve => setTimeout(() => resolve(true), dura));
}

export {
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
};