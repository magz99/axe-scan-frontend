import { TestBed } from '@angular/core/testing';

import { SiteListingFacadeService } from './site-listing-facade.service';

describe('SiteListingFacadeService', () => {
  let service: SiteListingFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteListingFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
