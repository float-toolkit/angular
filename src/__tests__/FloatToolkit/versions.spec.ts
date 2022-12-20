import FloatToolkitCore from "@float-toolkit/core";

import { FloatToolkit } from "../../float-toolkit.service";
import PackageJSON from "../../../package.json";

describe("FloatToolkit.VERSION", () => {
	it("should contain the full version tag", () => {
		expect(FloatToolkit.VERSION.full).toBe(PackageJSON.version);
	});

	it("should contain the major version", () => {
		expect(FloatToolkit.VERSION.major).toBe(PackageJSON.version.split(".")[0]!);
	});

	it("should contain the minor version", () => {
		expect(FloatToolkit.VERSION.minor).toBe(PackageJSON.version.split(".")[1]!);
	});

	it("should contain the patch version", () => {
		expect(FloatToolkit.VERSION.patch).toBe(PackageJSON.version.split(".")[2]!);
	});
});

describe("FloatToolkit.CORE_VERSION", () => {
	it("should equal FloatToolkitCore.VERSION", () => {
		expect(FloatToolkit.CORE_VERSION).toEqual(FloatToolkitCore.VERSION);
	});
});
