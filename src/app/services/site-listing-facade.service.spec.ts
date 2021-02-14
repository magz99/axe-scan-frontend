import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SiteListingAPIService } from './site-listing-api.service';

import { SiteListingFacadeService } from './site-listing-facade.service';

describe('SiteListingFacadeService', () => {
  let service: SiteListingFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SiteListingAPIService],
    });
    service = TestBed.inject(SiteListingFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
