import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AWSListing, AWSSiteListing } from './sites.types';

@Injectable({
  providedIn: 'root',
})
export class SiteListingAPIService {
  constructor(private http: HttpClient) {}

  // Returns a list of websites for which we have scans
  getSiteList(): Observable<AWSListing> {
    return this.http.get<AWSListing>(`api/scannedSiteList`);
  }

  // Return the timestamped folders for a particular site
  getSiteScans(siteName: string): Observable<AWSSiteListing> {
    return this.http.get<AWSSiteListing>(`api/singleSiteAllScans?siteName=${siteName}`);
  }
}
