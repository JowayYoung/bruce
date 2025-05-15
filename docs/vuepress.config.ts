import { readdirSync, statSync } from "node:fs";
import { extname } from "node:path";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

const dirs = readdirSync("src/us").filter(v => statSync(`src/us/${v}`).isDirectory());
const total = dirs.reduce((t, v) => {
	const count = readdirSync(`src/us/${v}`).filter(w => extname(w) === ".md").length;
	return t + count;
}, 0);
console.log(total);

export default defineUserConfig({
	base: "/bruce/",
	bundler: viteBundler(),
	cache: "dist/.cache",
	description: "前端工程化多包管理最佳实践方案",
	dest: "dist/build",
	lang: "zh-CN",
	port: 9876,
	temp: "dist/.temp",
	theme: hopeTheme({
		author: {
			email: "young.joway@outlook.com",
			name: "JowayYoung",
			url: "https://yangzw.vip"
		},
		favicon: "favicon.ico",
		fullscreen: true,
		logo: "https://jowayyoung.github.io/static/bruce/logo.svg",
		markdown: {
			codeTabs: true,
			imgLazyload: true,
			tabs: true,
			tasklist: true
		},
		navbar: [
			{ icon: "lightbulb", link: "/index.md", text: "指南" },
			{ icon: "cube", link: "/app/index.md", text: "app" },
			{ icon: "fire-flame-curved", link: "/ico/index.md", text: "ico" },
			{ icon: "image", link: "/img/index.md", text: "img" },
			{ icon: "globe", link: "/lng/index.md", text: "lng" },
			{ icon: "bolt", link: "/pkg/index.md", text: "pkg" },
			{ icon: "gear", link: "/std/index.md", text: "std" },
			{ icon: "palette", link: "/ui/index.md", text: "ui" },
			{ icon: "screwdriver-wrench", link: "/us/index.md", text: "us" },
			{ icon: "star", link: "https://github.com/JowayYoung/bruce", text: "Github" },
			{
				children: [
					{ link: "", text: "🏠 首页" },
					{ link: "/blog", text: "📋 博客" },
					{ link: "/source", text: "💻 开源" },
					{ link: "/tool", text: "🛠️ 工具" },
					{ link: "/store", text: "📦 收藏" },
					{ link: "/life", text: "🌈 生活" },
					{ link: "/about", text: "⚡ 关于" },
					{ link: "/contact", text: "🔗 联系" }
				],
				icon: "home",
				prefix: "https://yangzw.vip",
				text: "个人官网"
			}
		],
		plugins: {
			copyCode: {
				showInMobile: true
			},
			icon: {
				assets: "fontawesome"
			}
		},
		sidebar: {
			"/app/": "structure",
			"/ico/": "structure",
			"/img/": "structure",
			"/lng/": "structure",
			"/pkg/": "structure",
			"/std/": "structure",
			"/ui/": "structure",
			"/us/": "structure"
		}
	}),
	title: "Bruce FEES"
});