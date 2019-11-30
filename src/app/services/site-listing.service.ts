import { SiteUrls } from './site-urls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SITE_LIST_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class SiteListingService {
  constructor(private http: HttpClient) {}

  // Returns a list of websites for which we have scans
  getSiteList() {
    return this.http.get(SITE_LIST_URL + SiteUrls.SITES);
  }

  // Return the timestamped folders for a particular site
  getSiteScans(siteName: string) {
    return this.http.get(SITE_LIST_URL + SiteUrls.SITES + '/' + siteName);
  }
}
