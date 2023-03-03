> 唤起应用 - `Web`

第一个参数以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**download**|下载地址|`String`|`""`|当所有下载地址都匹配不上，就使用该下载地址作为兜底地址
**downloadAndroid**|Android下载地址|`String`|`""`|Google Play或国内四大手机应用商店提供的下载地址
**downloadIos**|iOS下载地址|`String`|`""`|App Store提供的下载地址
**downloadYyb**|应用宝下载地址|`String`|`""`|腾讯应用宝提供的下载地址，若页面可能在微信中打开就要配置该项
**host**|域名|`String`|`""`
**params**|查询参数|`Object`|`{}`|若键值为对象，请使用JSON.stringify()反序列化数据
**path**|路径|`String`|`""`
**protocol**|协议|`String`|`""`|无需带上//:

第二个参数以`对象解构`方式入参

入参|功能|类型|默认|说明
:-:|:-:|:-:|:-:|-
**debug**|调试|`Boolean`|`false`|建议在测试环境打开，可输出scheme与link(最终下载地址)
**fail**|失败回调函数|`Function`|-|可自定义业务逻辑
**start**|开始回调函数|`Function`|-|可自定义业务逻辑
**startWechat**|开始回调函数(在微信内)|`Function`|-|在微信内使用时，可自定义业务逻辑
**timeout**|时延|`Number`|`3000`|单位毫秒，尝试唤起应用，若唤起失败则在指定时延后打开指定下载地址

- [x] 用于唤起在移动端内已安装的应用，适用于`Android`与`iOS`
- [x] 若应用已安装，则唤起应用并打开应用内对应页面
- [x] 若应用未安装，则等待指定时间后打开系统对应下载地址或指定下载地址
- [x] `host`与`path`其实可视为一个提供高度随意拼接字符串的字段，在此增强`Scheme`的可用性与扩展性

```js
import { CallApp } from "@yangzw/bruce-us/dist/web";

// 唤起一个应用，业务方提供以下Scheme，若唤起失败在4秒后打开指定下载地址
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

// 页面加载完毕触发
const body = document.body;
body.addEventListener("load", () => callApp.onCall());
```

> 测试覆盖情况

- 安装应用
	- [x] Android浏览器期望：点击后跳出浏览器拉起应用，若返回浏览器则继续前往`Android下载页`
	- [x] iOS浏览器期望：点击后跳出浏览器拉起应用，若返回浏览器则继续前往`iOS下载页`，在`Safari`中有一定概率被拦截
	- [x] 微信期望(具备可能性)：点击后跳出微信拉起应用，若返回微信则继续前往应用宝下载页
	- [x] 微信期望(具备可能性)：点击后弹出阻止跳出的弹窗，说明该应用不再微信白名单中，让法务或业务办理微信服务号业务即可
- 未安装应用
	- [x] Android浏览器期望：点击后等待5秒后前往`Android下载页`
	- [x] iOS浏览器期望：点击后等待5秒后前往`iOS下载页`，在`Safari`中有一定概率被拦截
	- [x] 微信期望：点击后等待5秒后前往应用宝下载页

> 最终实际情况

- `iOS`中未下载应用，在`Safari`中被拦截，其他浏览器不受影响
- 两端的微信都拦截`Scheme`
- 其余情况按照预期通过