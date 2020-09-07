import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SiteListingService {
  constructor(private http: HttpClient) {}

  // Returns a list of websites for which we have scans
  getSiteList() {
    return this.http.get(`api/scannedSiteList`);
  }

  // Return the timestamped folders for a particular site
  getSiteScans(siteName: string) {
    return this.http.get(`api/singleSiteAllScans?siteName=${siteName}`);
  }
}
