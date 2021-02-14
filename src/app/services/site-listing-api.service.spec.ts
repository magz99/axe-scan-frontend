import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SiteListingAPIService } from './site-listing-api.service';

describe('SiteListingAPIService', () => {
  let service: SiteListingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(SiteListingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#getSiteList should return an AWSListing Observable', (done: DoneFn) => {
  //   service.getSiteList().subscribe((value) => {
  //     expect(value).toBe(of({ prefixes: [] }));
  //     done();
  //   });
  // });
});
