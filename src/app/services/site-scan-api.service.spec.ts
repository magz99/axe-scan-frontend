import { TestBed } from '@angular/core/testing';

import { SiteScanAPIService } from './site-scan-api.service';

describe('ScanLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteScanAPIService = TestBed.inject(SiteScanAPIService);
    expect(service).toBeTruthy();
  });
});
