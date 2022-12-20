import { ft } from "../setup.spec";

describe("FloatToolkit.output", () => {
	it("should have an initial value of 0", () => {
		expect(ft.output).toBe(0);
	});

	it("should be changed by operation methods", () => {
		function run(callback: () => void, expectedOutput: number): void {
			callback();
			expect(ft.output).toBe(expectedOutput);
		}

		run(() => ft.round(0.1 + 0.2), 0.3);
		run(() => ft.add([0.1, 0.2]), 0.3);
		run(() => ft.subtract([0.8, 0.1, 0.3]), 0.4);
		run(() => ft.multiply([0.1, 0.9]), 0.09);
		run(() => ft.divide([0.09, 0.9]), 0.1);
	});

	it("should be reset to 0 when calling FloatToolkit.resetOutput()", () => {
		ft.resetOutput();
		expect(ft.output).toBe(0);
	});
});
