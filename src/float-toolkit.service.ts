import { Injectable } from "@angular/core";
import FloatToolkitCore from "@float-toolkit/core";

import { versionNumbers } from "./versionNumbers";

@Injectable({ providedIn: "root" })
class FloatToolkit {
	private readonly ft = new FloatToolkitCore();
	private _output = 0;

	get output(): number {
		return this._output;
	}

	get defaultPrecision(): FloatToolkit.Precision {
		return this.ft.defaultPrecision;
	}

	set defaultPrecision(newPrecision: FloatToolkit.Precision) {
		this.ft.defaultPrecision = newPrecision;
	}

	get options(): FloatToolkit.Options {
		return this.ft.options;
	}

	add(numbers: number[], precision?: FloatToolkit.Precision): number {
		const result = this.ft.add(numbers, precision);

		this._output = result;
		return result;
	}

	divide(numbers: number[], precision?: FloatToolkit.Precision): number {
		const result = this.ft.divide(numbers, precision);

		this._output = result;
		return result;
	}

	multiply(numbers: number[], precision?: FloatToolkit.Precision): number {
		const result = this.ft.multiply(numbers, precision);

		this._output = result;
		return result;
	}

	resetOptions(options?: FloatToolkit.Options, resetOutput?: boolean): FloatToolkit.Options {
		if (resetOutput) this.resetOutput();
		return this.ft.resetOptions(options);
	}

	round(n: number, precision?: FloatToolkit.Precision): number {
		const result = this.ft.round(n, precision);

		this._output = result;
		return result;
	}

	setOptions(options?: FloatToolkit.Options, resetOutput?: boolean): FloatToolkit.Options {
		if (resetOutput) this.resetOutput();
		return this.ft.resetOptions(options);
	}

	subtract(numbers: number[], precision?: FloatToolkit.Precision): number {
		const result = this.ft.subtract(numbers, precision);

		this._output = result;
		return result;
	}

	resetOutput(): void {
		this._output = 0;
	}
}

namespace FloatToolkit {
	export type Precision = FloatToolkitCore.Precision;
	export interface Options extends FloatToolkitCore.Options {}
	export interface Version extends FloatToolkitCore.Version {}

	export const CORE_VERSION: Version = FloatToolkitCore.VERSION;
	export const VERSION: Version = {
		get full() {
			return versionNumbers.join(".");
		},

		get major() {
			return versionNumbers[0]!;
		},

		get minor() {
			return versionNumbers[1]!;
		},

		get patch() {
			return versionNumbers[2]!;
		},
	};
}

export { FloatToolkit };
