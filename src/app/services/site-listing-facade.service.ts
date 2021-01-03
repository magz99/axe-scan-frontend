import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { SiteListingAPIService } from 'src/app/services/site-listing-api.service';
import { AWSListing, AWSSiteListing } from 'src/app/services/types/sites.types';

@Injectable({
  providedIn: 'root'
})
export class SiteListingFacadeService {
    private siteResponse$: Observable<AWSListing>;
    private currentSite: string;
    private siteScans$: Observable<AWSSiteListing>;

    constructor(private siteListingService: SiteListingAPIService) {
      this.siteResponse$ = this.siteListingService.getSiteList().pipe(shareReplay(1));
    }

   getSites(): Observable<AWSListing> {
      return this.siteResponse$;
   }

   getSiteScans( siteName: string ): Observable<AWSSiteListing> {
    if ( siteName !== this.currentSite ) {
      this.siteScans$ = this.siteListingService.getSiteScans(siteName).pipe(shareReplay(1));
      this.currentSite = siteName;
    }
    return this.siteScans$;
   }
}
