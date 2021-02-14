import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { SiteListingAPIService } from 'src/app/services/site-listing-api.service';
import { AWSListing, AWSSiteListing } from 'src/app/services/types/sites.types';

@Injectable({
  providedIn: 'root',
})
export class SiteListingFacadeService {
  private siteResponse$: Observable<AWSListing>;
  private currentSite: string;
  private siteScans$: Observable<AWSSiteListing>;

  constructor(private siteListingService: SiteListingAPIService) {
    this.siteResponse$ = this.siteListingService.getSiteList().pipe(
      shareReplay(1),
      catchError((err) => {
        console.log('siteListingFacade error:', err);
        return of({ prefixes: [] });
      })
    );
  }

  getSites(): Observable<AWSListing> {
    return this.siteResponse$;
  }

  getSiteScans(siteName: string): Observable<AWSSiteListing> {
    if (siteName !== this.currentSite) {
      this.siteScans$ = this.siteListingService.getSiteScans(siteName).pipe(
        shareReplay(1),
        catchError((err) => {
          console.log('getSiteScans error: ', err);
          return of({ siteFolders: [] });
        })
      );
      this.currentSite = siteName;
    }
    return this.siteScans$;
  }
}
