import {
	GetCookie,
	RemoveCookie,
	SetCookie
} from "./cookie";
import {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	Jsonp,
	LoadScript
} from "./dom";
import {
	Ajax
} from "./function";
import {
	ClearLStorage,
	ClearSStorage,
	GetLStorage,
	GetSStorage,
	RemoveLStorage,
	RemoveSStorage,
	SetLStorage,
	SetSStorage
} from "./storage";
import {
	WebType
} from "./type";
import {
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
} from "./url";

export {
	// ✅Cookie缓存
	GetCookie,
	RemoveCookie,
	SetCookie,
	// ✅Dom节点
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	Jsonp,
	LoadScript,
	// ✅Function函数
	Ajax,
	// ✅Storage存储
	ClearLStorage,
	ClearSStorage,
	GetLStorage,
	GetSStorage,
	RemoveLStorage,
	RemoveSStorage,
	SetLStorage,
	SetSStorage,
	// ✅Type类型
	WebType,
	// ✅Url链接
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
};