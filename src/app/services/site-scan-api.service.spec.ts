import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SiteScanAPIService } from './site-scan-api.service';

describe('SiteScanAPIService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it('should be created', () => {
    const service: SiteScanAPIService = TestBed.inject(SiteScanAPIService);
    expect(service).toBeTruthy();
  });
});
