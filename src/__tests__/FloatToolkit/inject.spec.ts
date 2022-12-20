import { defaultOptions } from "../__mocks__/defaultOptions";
import { ft } from "../setup.spec";

describe("inject FloatToolkit", () => {
	it("should inject with the default options", () => {
		expect(ft).toBeDefined();

		expect(ft.defaultPrecision).toBe(10);
		expect(ft.options).toEqual(defaultOptions);
	});
});
