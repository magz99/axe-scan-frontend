import { SiteListingService } from 'src/app/services/site-listing.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonPrefix, AWSSiteListing } from 'src/app/services/sites.types';
import { Subscription } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-site-scan-landing',
  templateUrl: './site-scan-landing.component.html',
  styleUrls: ['./site-scan-landing.component.less'],
})
export class SiteScansLandingComponent implements OnInit, OnDestroy {
  siteScans: CommonPrefix[];
  subscriptions: Subscription;
  siteName: string;
  constructor(
    private siteService: SiteListingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptions = this.route.params
      .pipe(
        map(params => params.id),
        switchMap(siteName => {
          this.siteName = siteName;
          return this.siteService.getSiteScans(this.siteName);
        })
      )
      .subscribe((data: AWSSiteListing) => {
        this.siteScans = data.CommonPrefixes;
        console.log(this.siteScans);
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
