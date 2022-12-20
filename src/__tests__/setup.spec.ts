import { TestBed } from "@angular/core/testing";

import { FloatToolkit } from "../float-toolkit.service";

export let ft: FloatToolkit;

beforeEach(() => {
	TestBed.configureTestingModule({});

	ft = TestBed.inject(FloatToolkit, undefined);
});
