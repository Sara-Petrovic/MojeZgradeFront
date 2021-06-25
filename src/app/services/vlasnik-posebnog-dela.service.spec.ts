import { TestBed } from '@angular/core/testing';

import { VlasnikPosebnogDelaService } from './vlasnik-posebnog-dela.service';

describe('VlasnikPosebnogDelaService', () => {
  let service: VlasnikPosebnogDelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VlasnikPosebnogDelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
