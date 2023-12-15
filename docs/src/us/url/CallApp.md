---
title: 唤起应用 🔥
icon: paperclip
---

第一个参数以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**download**|下载地址|`String`|`""`|当所有下载地址都匹配不上，就用这个下载地址作为兜底地址
**downloadAndroid**|Android下载地址|`String`|`""`|Google Play或国内四大手机应用商店提供的下载地址
**downloadIos**|iOS下载地址|`String`|`""`|App Store提供的下载地址
**downloadYyb**|应用宝下载地址|`String`|`""`|腾讯应用宝提供的下载地址，如果网页可能在微信中打开就要配置此项
**host**|域名|`String`|`""`
**params**|查询参数|`Object`|`{}`|如果键值为对象，请用JSON.stringify()反序列化数据
**path**|路径|`String`|`""`
**protocol**|协议|`String`|`""`|无需带上//:

第二个参数以`对象解构`的方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**debug**|调试|`Boolean`|`false`|建议在测试环境打开，可以输出scheme和link(最终下载地址)
**fail**|失败回调函数|`Function`|-|可以自定义业务逻辑
**start**|开始回调函数|`Function`|-|可以自定义业务逻辑
**startWechat**|开始回调函数(在微信内)|`Function`|-|在微信内使用时，可以自定义业务逻辑
**timeout**|时延|`Number`|`3000`|单位毫秒`ms`，尝试唤起应用，如果唤起失败就在指定时延后打开指定下载地址

- [x] 用于唤起在移动端内已经安装的应用，适用于`Android`和`iOS`
- [x] 如果应用已经安装，就唤起应用并打开应用内对应网页
- [x] 如果应用没有安装，就等待指定时间之后打开系统对应下载地址或指定下载地址
- [x] `host`和`path`其实可以视为一个提供高度随意拼接字符串的字段，在此增强`Scheme`的可用性和扩展性

```js
import { CallApp } from "@yangzw/bruce-us/dist/web";

// 唤起一个应用，业务方提供这条Scheme，如果唤起失败在5秒之后打开指定下载地址
// cloudgame//:xyz.share/123?action=openApp&params={"data":{"a":1,"b":2}}

const callApp = new CallApp({
	download: "https://baidu.com",
	downloadAndroid: "https://play.google.com/store/apps/details?id=com.netease.ko&hl=zh&gl=cn",
	downloadIos: "https://apps.apple.com/cn/app/id1279207754",
	downloadYyb: "https://sj.qq.com/appdetail/com.netease.hyxd",
	host: "xyz.share",
	params: {
		action: "openApp",
		params: JSON.stringify({ data: { a: 1, b: 2 } })
	},
	path: "/123",
	protocol: "cloudgame"
}, {
	debug: true,
	timeout: 5000
});

// 通过点击事件触发
const btn = document.getElementById("btn");
btn?.addEventListener("click", () => callApp.onCall());

// 网页加载之后触发
const body = document.body;
body.addEventListener("load", () => callApp.onCall());
```

> 测试覆盖情况

- 安装应用
	- [x] Android浏览器期望：点击之后跳出浏览器拉起应用，如果返回浏览器就继续前往`Android下载页`
	- [x] iOS浏览器期望：点击之后跳出浏览器拉起应用，如果返回浏览器就继续前往`iOS下载页`，在`Safari`中有一定概率被拦截
	- [x] 微信期望(具备可能性)：点击之后跳出微信拉起应用，如果返回微信就继续前往应用宝下载页
	- [x] 微信期望(具备可能性)：点击之后弹出阻止跳出的弹窗，说明这个应用不在微信白名单中，需要让法务或业务办理微信服务号业务
- 未安装应用
	- [x] Android浏览器期望：点击之后等待5秒前往`Android下载页`
	- [x] iOS浏览器期望：点击之后等待5秒前往`iOS下载页`，在`Safari`中有一定概率被拦截
	- [x] 微信期望：点击之后等待5秒前往应用宝下载页

> 最终实际情况

- `iOS`中未下载应用，在`Safari`中被拦截，其它浏览器不受影响
- 两端的微信都拦截`Scheme`
- 其它情况根据预期通过