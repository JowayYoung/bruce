import {
	GetCookie,
	RemoveCookie,
	SetCookie
} from "./cookie";
import {
	AutoResponse,
	Base64ToFile,
	CopyPaste,
	DownloadFile,
	DownloadText,
	FilterXss,
	HighlightText,
	ImgToBase64,
	Jsonp,
	LoadScript,
	ProhibitEvent
} from "./dom";
import {
	Aios,
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
	Base64ToFile,
	CopyPaste,
	DownloadFile,
	DownloadText,
	FilterXss,
	HighlightText,
	ImgToBase64,
	Jsonp,
	LoadScript,
	ProhibitEvent,
	// ✅Function函数
	Aios,
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