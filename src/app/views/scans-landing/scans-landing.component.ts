import { AWSListing, AWSSite } from '../../services/sites.types';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteListingFacadeService } from './site-listing-facade.service';

@Component({
  selector: 'app-scans-landing',
  templateUrl: './scans-landing.component.html',
  styleUrls: ['./scans-landing.component.less'],
})
export class ScansLandingComponent implements OnInit, OnDestroy {
  siteList$: Observable<AWSListing>;
  siteList: AWSSite[];

  constructor(private siteListingFacade: SiteListingFacadeService) {
    this.siteList$ = this.siteListingFacade.getSites();
  }

  // Use ngOnInit for:
  // To perform complex initializations shortly after construction
  // To set up the component after Angular sets the input properties.
  ngOnInit() {
  }

  // Put cleanup logic in ngOnDestroy(), the logic that must run before Angular destroys the directive.
  // This is the place to free resources that won't be garbage collected automatically.
  // Unsubscribe from Observables and DOM events. Stop interval timers. Unregister all callbacks that
  //  this directive registered with global or application services. You risk memory leaks if you neglect to do so.
  // This is the time to notify another part of the application that the component is going away.
  ngOnDestroy() {}
}
