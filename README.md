<div align="center" style="margin-bottom: 0.5rem">
	<img src="https://raw.githubusercontent.com/float-toolkit/angular/HEAD/media/ftangular.svg" width="150" />
</div>

<div align="center">

# Float Toolkit for Angular

[![NPM latest version](https://img.shields.io/npm/v/@float-toolkit/angular?label=version&logo=npm)](https://www.npmjs.com/package/@float-toolkit/angular)
[![NPM downloads](https://img.shields.io/npm/dt/@float-toolkit/angular?logo=npm)](https://www.npmjs.com/package/@float-toolkit/angular)
[![Tests status](https://img.shields.io/github/workflow/status/float-toolkit/angular/Test%20with%20Karma?label=tests&logo=angular&logoColor=white)](https://github.com/float-toolkit/angular/actions/workflows/testWithKarma.yml)
[![Code coverage with Codecov](https://img.shields.io/codecov/c/github/float-toolkit/angular/tests?logo=codecov&logoColor=white)](https://codecov.io/gh/float-toolkit/angular)
[![Contributor Covenant Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-2.1-5e0d73)](https://github.com/float-toolkit/angular/blob/master/.github/CODE_OF_CONDUCT.md)

</div>

An [Angular](https://angular.io/) [service](https://angular.io/guide/creating-injectable-service) wrapper for
[**Float Toolkit**](https://float-toolkit.web.app/)

## Get started

### Installation

To add Float Toolkit to your Angular app, you have two options:

#### Install using the Angular CLI

Run this command:

```sh-session
ng add @float-toolkit/angular
```

#### Install manually

Run this command:

```sh-session
npm install @float-toolkit/angular
```

Then, import the `FloatToolkitModule` into any module where you want to use the `FloatToolkit` service.

```ts
import { FloatToolkitModule } from "@float-toolkit/angular";

@NgModule({
	imports: [
		// ...
		FloatToolkitModule,
	],
})
export class AppModule {}
```

### Usage

The package exports an **Angular injectable (service)** called `FloatToolkit`. It implements an `output` state property, as well as
FloatToolkit methods that also serve as setters for the output.

```ts
import { Component, Input, OnInit } from "@angular/core";
import { FloatToolkit } from "@float-toolkit/angular";

@Component({
	// ...
	template: ` <span class="number">{{ output }}</span> `,
})
export class SumComponent implements OnInit {
	constructor(private ft: FloatToolkit) {}

	@Input() x = 0;
	@Input() y = 0;

	get output(): number {
		return this.ft.output;
	}

	ngOnInit(): void {
		this.ft.add([this.x, this.y]);
	}
}
```

## Support

Need help using Float Toolkit? Don't hesitate to reach out on
[GitHub Discussions](https://github.com/float-toolkit/angular/discussions/categories/q-a)!

## Links

-   [FloatToolkit documentation (Vanilla JS)](https://float-toolkit.web.app)
-   [GitHub](https://github.com/float-toolkit/angular)
-   [npm](https://npmjs.com/package/@float-toolkit/angular)

## Contributing

Before creating an issue, please consider the following:

-   Read the [documentation](https://float-toolkit.web.app) and **this file** carefully to make sure the error is actually a bug and
    not a mistake of your own.
-   Make sure the issue hasn't already been reported or suggested.
-   After following these steps, you can file an issue using one of our
    [templates](https://github.com/float-toolkit/angular/issues/new/choose). Please make sure to follow our
    [Code of Conduct](https://github.com/float-toolkit/angular/blob/master/.github/CODE_OF_CONDUCT.md).
-   If you wish to [submit a pull request](https://github.com/float-toolkit/angular/compare) alongside your issue, please follow our
    [contribution guidelines](https://github.com/float-toolkit/angular/blob/master/.github/CONTRIBUTING.md).
