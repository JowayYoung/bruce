// import {
// 	GroupArrKey,
// 	RecordArrPosition,
// 	StatArrCount,
// 	StatArrKeyword
// } from "../src/common/array";

// // https://juejin.cn/post/6901565843348881416
// // https://juejin.cn/post/6953072509021323278

// test("Common Array GroupArrKey", () => {
// 	const arr = [
// 		{ area: "德国", name: "奔驰" },
// 		{ area: "德国", name: "宝马" },
// 		{ area: "德国", name: "奥迪" },
// 		{ area: "英国", name: "捷豹" },
// 		{ area: "英国", name: "路虎" }
// 	];
// 	const tgt = {
// 		德国: [
// 			{ area: "德国", name: "奔驰" },
// 			{ area: "德国", name: "宝马" },
// 			{ area: "德国", name: "奥迪" }
// 		],
// 		英国: [
// 			{ area: "英国", name: "捷豹" },
// 			{ area: "英国", name: "路虎" }
// 		]
// 	};
// 	expect(GroupArrKey(arr, "area")).toStrictEqual(tgt);
// 	expect(GroupArrKey(arr)).toStrictEqual({});
// });

// test("Common Array RecordArrPosition", () => {
// 	const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
// 	const tgt = [0, 4];
// 	expect(RecordArrPosition(arr, 2)).toStrictEqual(tgt);
// 	expect(RecordArrPosition(arr, 0)).toStrictEqual([]);
// });

// test("Common Array StatArrCount", () => {
// 	const arr = [0, 1, 1, 2, 2, 2];
// 	const tgt = { 0: 1, 1: 2, 2: 3 };
// 	const res = StatArrCount(arr);
// 	expect(res).toStrictEqual(tgt);
// });

// test("Common Array StatArrKeyword", () => {
// 	const arr1 = [
// 		"今天天气真好，我想出去钓鱼",
// 		"我一边看电视，一边写作业",
// 		"小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心",
// 		"最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非"
// 	];
// 	const arr2 = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"];
// 	const tgt = ["喜欢", "摸鱼", "真好", "一边"];
// 	const res = StatArrKeyword(arr1, arr2);
// 	expect(res).toStrictEqual(tgt);
// });
function Sum(...vals: number[]): number {
	return vals.reduce((t, v) => t + v, 0);
}

test("期望结果是6", () => {
	expect(Sum(1, 2, 3)).toBe(6);
});
test("期望结果是9", () => {
	expect(Sum(1, 2, 3)).toBe(9);
});