import { TestBed } from '@angular/core/testing';

import { SiteScanFacadeService } from './site-scan-facade.service';

describe('SiteScanFacadeService', () => {
  let service: SiteScanFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteScanFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
