import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SITE_LIST_URL = 'http://localhost:3000/sites';
@Injectable({
  providedIn: 'root',
})
export class SiteListingService {
  constructor(private http: HttpClient) {}

  getSiteList() {
    return this.http.get(SITE_LIST_URL);
  }
}
