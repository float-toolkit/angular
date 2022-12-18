import { TestBed } from '@angular/core/testing';

import { FloatToolkitService } from './float-toolkit.service';

describe('FloatToolkitService', () => {
  let service: FloatToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloatToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
