import { SiteListingService } from 'src/app/services/site-listing.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AWSSiteListing,
  AWSSite,
  FixedAWSSite,
} from 'src/app/services/sites.types';
import { Subscription } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-site-scan-landing',
  templateUrl: './site-scan-landing.component.html',
  styleUrls: ['./site-scan-landing.component.less'],
})
export class SiteScansLandingComponent implements OnInit, OnDestroy {
  siteScans: FixedAWSSite[];
  subscriptions: Subscription;
  siteName: string;
  constructor(
    private siteService: SiteListingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptions = this.route.params
      .pipe(
        map((params) => params.sitename),
        switchMap((siteName) => {
          this.siteName = siteName;
          return this.siteService.getSiteScans(this.siteName);
        })
      )
      .subscribe((data: AWSSiteListing) => {
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
        console.log(this.siteScans);
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
