import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AWSSiteListing,
  FixedAWSSite,
} from 'src/app/services/sites.types';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SiteListingFacadeService } from 'src/app/services/site-listing-facade.service';

@Component({
  selector: 'app-site-scan-landing',
  templateUrl: './site-scan-landing.component.html',
  styleUrls: ['./site-scan-landing.component.less'],
})
export class SiteScansLandingComponent implements OnInit, OnDestroy {
  siteListings$: Observable<AWSSiteListing>;
  siteScans: FixedAWSSite[];
  subscriptions: Subscription = new Subscription();
  siteName: string;
  constructor(
    private siteListingFacadeService: SiteListingFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.siteListings$ = this.route.params
      .pipe(
        map((params) => params.sitename),
        switchMap((siteName) => {
          this.siteName = siteName;
          return this.siteListingFacadeService.getSiteScans(this.siteName);
        })
      );


    this.subscriptions.add(this.siteListings$.subscribe((data: AWSSiteListing) => {
        this.siteScans = data.siteFolders.map((site) => {
          // Convert the date string into a valid date to display
          const splitPrefix = site.prefix.split('T');
          const fixedDateName =
            splitPrefix[0].substr(1) + 'T' + splitPrefix[1].replace(/-/g, ':');

          return {
            ...site,
            displayName: fixedDateName,
          };
        });
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
