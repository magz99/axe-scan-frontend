import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SiteScanAPIService } from './site-scan-api.service';

import { SiteScanFacadeService } from './site-scan-facade.service';

describe('SiteScanFacadeService', () => {
  let service: SiteScanFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SiteScanAPIService],
    });
    service = TestBed.inject(SiteScanFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
