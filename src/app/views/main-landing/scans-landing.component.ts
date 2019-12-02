import { AWSListing, CommonPrefix } from './../../services/sites.types';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SiteListingService } from 'src/app/services/site-listing.service';

@Component({
  selector: 'app-scans-landing',
  templateUrl: './scans-landing.component.html',
  styleUrls: ['./scans-landing.component.less'],
})
export class ScansLandingComponent implements OnInit, OnDestroy {
  siteList: CommonPrefix[];

  constructor(private siteService: SiteListingService) {}

  // Use ngOnInit for:
  // To perform complex initializations shortly after construction
  // To set up the component after Angular sets the input properties.
  ngOnInit() {
    this.siteService.getSiteList().subscribe((data: AWSListing) => {
      this.siteList = data.CommonPrefixes;
      // console.log(this.siteList);
    });
  }

  // Put cleanup logic in ngOnDestroy(), the logic that must run before Angular destroys the directive.
  // This is the place to free resources that won't be garbage collected automatically.
  // Unsubscribe from Observables and DOM events. Stop interval timers. Unregister all callbacks that
  //  this directive registered with global or application services. You risk memory leaks if you neglect to do so.
  // This is the time to notify another part of the application that the component is going away.
  ngOnDestroy() {}
}
