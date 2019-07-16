import { TestBed } from '@angular/core/testing';

import { PadsService } from './pads.service';

describe('PadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PadsService = TestBed.get(PadsService);
    expect(service).toBeTruthy();
  });
});
