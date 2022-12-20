import { writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

import PackageJSON from "../package.json" assert { type: "json" };

writeFileSync(
	join(cwd(), "src/versionNumbers.ts"),
	`// AUTOGENERATED. DO NOT MODIFY.

/**
 * @internal
 */
export const versionNumbers = ${JSON.stringify(PackageJSON.version.split("."))};`
);
