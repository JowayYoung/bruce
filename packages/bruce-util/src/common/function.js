/** 函数工具 **/

/**
 * @name 格式异步返回值
 * @param {function} [pfn=Promise.resolve(true)] Promise函数
 */
function AsyncTo(pfn = Promise.resolve(true)) {
	return pfn && pfn instanceof Promise ? pfn.then(data => [null, data]).catch(err => [err]) : [null, null];
}

/**
 * @name 防抖
 * @param {function} [fn=v=>v] 函数
 * @param {number} [dura=50] 时延
 */
function Debounce(fn = v => v, dura = 50) {
	let timer = null;
	return function(...args) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), dura);
	};
}

/**
 * @name 节流
 * @param {function} [fn=v=>v] 函数
 * @param {number} [dura=50] 时延
 */
function Throttle(fn = v => v, dura = 50) {
	let pass = 0;
	return function(...args) {
		const now = +new Date();
		if (now - pass > dura) {
			pass = now;
			fn.apply(this, args);
		}
	};
}

/**
 * @name 等待
 * @param {number} [dura=1000] 时延
 */
async function WaitFor(dura = 1000) {
	return new Promise(resolve => setTimeout(() => resolve(true), dura));
}

export {
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
};