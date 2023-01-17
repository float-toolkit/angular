import { Injectable } from "@angular/core";
import FloatToolkitCore from "@float-toolkit/core";

import { versionNumbers } from "./versionNumbers";

// * In the following TypeDoc comment, there is a U+200c character before @Component({...}) to prevent the parser from confusing it
// * with a tag.
/**
 * An Angular injectable (service) that implements FloatToolkit methods and an `output` property.
 *
 * @example
 * import { FloatToolkit } from "@float-toolkit/angular";
 *
 * ‌@Component({...})
 * export class SumComponent {
 * 	constructor(private ft: FloatToolkit) {}
 * }
 */
@Injectable({ providedIn: "root" })
class FloatToolkit {
	private readonly ft = new FloatToolkitCore();
	private _output = 0;

	/**
	 * A reactive state property containing the returned value of the last method called.
	 */
	get output(): number {
		return this._output;
	}

	/**
	 * An integer between 1 and 17.
	 * Defines the precision (number of decimals) to use by default, if the precision is not specified in the method itself.
	 */
	get defaultPrecision(): FloatToolkit.Precision {
		return this.ft.defaultPrecision;
	}

	set defaultPrecision(newPrecision: FloatToolkit.Precision) {
		this.ft.defaultPrecision = newPrecision;
	}

	/**
	 * The options object used in the service.
	 */
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

	/**
	 * Resets the output to 0.
	 */
	resetOutput(): void {
		this._output = 0;
	}
}

namespace FloatToolkit {
	/**
	 * An integer between 1 and 17, which can be used as the default precision for the `FloatToolkit` service.
	 */
	export type Precision = FloatToolkitCore.Precision;

	/**
	 * Options that can be set to modify the behavior of the `FloatToolkit` service.
	 */
	export interface Options extends FloatToolkitCore.Options {}

	/**
	 * An object containing the version of a FloatToolkit package.
	 */
	export interface Version extends FloatToolkitCore.Version {}

	/**
	 * Contains the version of `@float-toolkit/core` used by the Angular service.
	 */
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
