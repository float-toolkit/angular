import { defaultOptions } from "../__mocks__/defaultOptions";
import { ft } from "../setup.spec";
import { FloatToolkit } from "../../float-toolkit.service";

describe("FloatToolkit.defaultPrecision", () => {
	it("should return a valid FloatToolkit.Precision value", () => {
		expect(ft.defaultPrecision).toBe(10);
	});

	it("should be assignable to a FloatToolkit.Precision value", () => {
		expect(() => {
			ft.defaultPrecision = 5;
		}).not.toThrowError();

		expect(ft.defaultPrecision).toBe(5);
	});
});

describe("FloatToolkit.options", () => {
	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(ft.options).toEqual(defaultOptions);
		expect(Object.isFrozen(ft.options)).toBeTrue();
	});
});

describe("FloatToolkit.setOptions()", () => {
	let prevOptions: Readonly<FloatToolkit.Options>;
	let returnedOptions: Readonly<FloatToolkit.Options>;

	beforeEach(() => {
		prevOptions = ft.options;

		returnedOptions = ft.setOptions({
			forceUseDefaultPrecision: true,
		});
	});

	it("should modify the service's options", () => {
		expect(returnedOptions).toEqual({ ...prevOptions, forceUseDefaultPrecision: true });
	});

	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(Object.isFrozen(returnedOptions)).toBeTrue();
	});

	it("should reset the output if instructed", () => {
		const newOptions: FloatToolkit.Options = {
			forceUseDefaultPrecision: true,
		};

		ft.add([1]);
		expect(ft.output).toBe(1);

		ft.setOptions(newOptions, true);
		expect(ft.output).toBe(0);
		expect(ft.options).toEqual({ ...returnedOptions, ...newOptions });
	});
});

describe("FloatToolkit.resetOptions()", () => {
	let returnedOptions: Readonly<FloatToolkit.Options>;

	beforeEach(() => {
		returnedOptions = ft.resetOptions({
			forceUseDefaultPrecision: true,
		});
	});

	it("should reset and modify the FloatToolkit's options", () => {
		expect(returnedOptions).toEqual({ ...defaultOptions, forceUseDefaultPrecision: true });
	});

	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(Object.isFrozen(returnedOptions)).toBeTrue();
	});

	it("should reset the output if instructed", () => {
		const newOptions: FloatToolkit.Options = {
			forceUseDefaultPrecision: true,
		};

		ft.add([1]);
		expect(ft.output).toBe(1);

		ft.resetOptions(newOptions, true);
		expect(ft.output).toBe(0);
		expect(ft.options).toEqual({ ...defaultOptions, ...newOptions });
	});
});
