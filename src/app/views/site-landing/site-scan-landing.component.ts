import { SiteListingService } from 'src/app/services/site-listing.service';
import { Component, OnInit } from '@angular/core';
import { CommonPrefix, AWSSiteListing } from 'src/app/services/sites.types';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-site-scan-landing',
  templateUrl: './site-scan-landing.component.html',
  styleUrls: ['./site-scan-landing.component.less'],
})
export class SiteScansLandingComponent implements OnInit {
  siteScans: CommonPrefix[];
  subscriptions: Subscription;
  siteName: string;
  constructor(
    private siteService: SiteListingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptions = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          // console.log('params get id: ', params.getAll('id'));
          this.siteName = params.get('id');
          return this.siteService.getSiteScans(this.siteName);
        })
      )
      .subscribe((data: AWSSiteListing) => {
        this.siteScans = data.CommonPrefixes;
        console.log(this.siteScans);
      });
  }
}
