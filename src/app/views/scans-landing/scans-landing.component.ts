import { AWSListing, AWSSite } from '../../services/types/sites.types';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteListingFacadeService } from '../../services/site-listing-facade.service';

@Component({
  selector: 'app-scans-landing',
  templateUrl: './scans-landing.component.html',
  styleUrls: ['./scans-landing.component.less'],
})
export class ScansLandingComponent {
  siteList$: Observable<AWSListing>;
  siteList: AWSSite[];

  constructor(private siteListingFacade: SiteListingFacadeService) {
    this.siteList$ = this.siteListingFacade.getSites();
  }
}
