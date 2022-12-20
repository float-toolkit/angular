import { NgModule } from "@angular/core";

import { FloatToolkit } from "./float-toolkit.service";

/**
 * Exports the `FloatToolkit` injectable (service).
 */
@NgModule({
	providers: [FloatToolkit],
})
export class FloatToolkitModule {}
