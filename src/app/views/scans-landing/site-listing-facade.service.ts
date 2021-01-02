import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { SiteListingAPIService } from 'src/app/services/site-listing.service';
import { AWSListing } from 'src/app/services/sites.types';

@Injectable({
  providedIn: 'root'
})
export class SiteListingFacadeService {
    private siteResponse$: Observable<AWSListing>;

    constructor(private siteListingService: SiteListingAPIService) {
      this.siteResponse$ = this.siteListingService.getSiteList().pipe(shareReplay(1));
    }

   getSites(): Observable<AWSListing> {
     return this.siteResponse$;
   }
}
