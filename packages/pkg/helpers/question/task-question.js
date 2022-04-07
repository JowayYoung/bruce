import { existsSync } from "fs";
import { AbsPath, WaitFor } from "@yangzw/bruce-us/dist/node.js";
import { execa } from "execa";
import { Listr } from "listr2";
import Semver from "semver";

import { PUBLISH_TEXT } from "../../constants/i18n/index.js";

const { valid } = Semver;

const CHECK_AUTH = {
	async task(_, task) {
		try {
			task.output = "npm whoami";
			const { stdout } = await execa("npm", ["whoami"]);
			await WaitFor();
			if (!stdout) {
				throw new Error(PUBLISH_TEXT.errorAuth);
			}
		} catch {
			throw new Error(PUBLISH_TEXT.errorAuth);
		}
	},
	title: PUBLISH_TEXT.taskAuth
};

const CHECK_ENV_NODE = {
	async task(_, task) {
		try {
			task.output = "node -v";
			const { stdout } = await execa("node", ["-v"]);
			await WaitFor();
			if (!valid(stdout)) {
				throw new Error(PUBLISH_TEXT.errorEnvNode);
			}
		} catch {
			throw new Error(PUBLISH_TEXT.errorEnvNode);
		}
	},
	title: PUBLISH_TEXT.taskEnvNode
};

const CHECK_ENV_NPM = {
	async task(_, task) {
		try {
			task.output = "npm -v";
			const { stdout } = await execa("npm", ["-v"]);
			await WaitFor();
			if (!valid(stdout)) {
				throw new Error(PUBLISH_TEXT.errorEnvNpm);
			}
		} catch {
			throw new Error(PUBLISH_TEXT.errorEnvNpm);
		}
	},
	title: PUBLISH_TEXT.taskEnvNpm
};

const CHECK_ENV_REGISTRY = {
	async task(_, task) {
		try {
			task.output = "npm config get registry";
			const { stdout } = await execa("npm", ["config", "get", "registry"]);
			await WaitFor();
			if (stdout !== "https://registry.npmjs.org/") {
				throw new Error(PUBLISH_TEXT.errorEnvRegistry);
			}
		} catch {
			throw new Error(PUBLISH_TEXT.errorEnvRegistry);
		}
	},
	title: PUBLISH_TEXT.taskEnvRegistry
};

const CHECK_ENV = {
	task: () => new Listr([
		CHECK_ENV_NODE,
		CHECK_ENV_NPM,
		CHECK_ENV_REGISTRY
	]),
	title: PUBLISH_TEXT.taskEnv
};

const CHECK_DEPS_NPM = {
	enabled: ctx => ctx.yarn === false,
	async task(_, task) {
		try {
			if (existsSync(AbsPath("node_modules"))) return;
			task.output = "npm i";
			await execa("npm", ["i"]);
			await WaitFor();
		} catch {
			throw new Error(PUBLISH_TEXT.errorDepsNpm);
		}
	},
	title: PUBLISH_TEXT.taskDepsNpm
};

const CHECK_DEPS_YARN = {
	async task(ctx, task) {
		try {
			if (existsSync(AbsPath("node_modules"))) return;
			task.output = "yarn";
			ctx.yarn = true;
			await execa("yarn");
			await WaitFor();
		} catch {
			ctx.yarn = false;
			task.skip(PUBLISH_TEXT.errorDepsYarn);
		}
	},
	title: PUBLISH_TEXT.taskDepsYarn
};

const CHECK_DEPS = {
	task: () => new Listr([
		CHECK_DEPS_YARN,
		CHECK_DEPS_NPM
	]),
	title: PUBLISH_TEXT.taskDeps
};

const CHECK_PUBLISH = {
	async task(_, task) {
		try {
			task.output = "npm publish";
			await execa("npm", ["publish"]);
			await WaitFor();
		} catch (e) {
			if (e.message.includes("- Forbidden")) {
				throw new Error(PUBLISH_TEXT.errorPublish.noaccess);
			} else if (e.message.includes("- You do not have permission to publish")) {
				throw new Error(PUBLISH_TEXT.errorPublish.occupied);
			} else if (e.message.includes("- Package name too similar to existing packages")) {
				throw new Error(PUBLISH_TEXT.errorPublish.similar);
			} if (e.message.includes("- You cannot publish over the previously published versions")) {
				throw new Error(PUBLISH_TEXT.errorPublish.version);
			} else {
				throw new Error(PUBLISH_TEXT.errorPublish.disabled);
			}
		}
	},
	title: PUBLISH_TEXT.taskPublish
};

export {
	CHECK_AUTH,
	CHECK_DEPS,
	CHECK_ENV,
	CHECK_PUBLISH
};