import Inquirer from "inquirer";

import { NAME, SCOPE } from "../question/index.js";

export default async function CreateAnswer() {
	const res = await Inquirer.prompt([NAME, SCOPE]);
	return res;
}