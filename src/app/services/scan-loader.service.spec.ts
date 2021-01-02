import { TestBed } from '@angular/core/testing';

import { ScanLoaderService } from './scan-loader.service';

describe('ScanLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScanLoaderService = TestBed.inject(ScanLoaderService);
    expect(service).toBeTruthy();
  });
});
