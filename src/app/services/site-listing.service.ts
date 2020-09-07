import { ApiUrls } from './site-urls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SITE_LIST_URL =
  'https://0huw2vaqr3.execute-api.us-east-1.amazonaws.com/default/scannedSiteListS3';

const SITE_SCAN_LIST_URL =
  'https://xuuxj86tmb.execute-api.us-east-1.amazonaws.com/default/singleSiteAllScans';

@Injectable({
  providedIn: 'root',
})
export class SiteListingService {
  constructor(private http: HttpClient) {}

  // Returns a list of websites for which we have scans
  getSiteList() {
    return this.http.get(SITE_LIST_URL);
  }

  // Return the timestamped folders for a particular site
  getSiteScans(siteName: string) {
    return this.http.get(`${SITE_SCAN_LIST_URL}?siteName=${siteName}`);
  }
}
