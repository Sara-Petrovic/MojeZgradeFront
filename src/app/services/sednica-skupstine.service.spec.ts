import { TestBed } from '@angular/core/testing';

import { SednicaSkupstineService } from './sednica-skupstine.service';

describe('SednicaSkupstineService', () => {
  let service: SednicaSkupstineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SednicaSkupstineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
