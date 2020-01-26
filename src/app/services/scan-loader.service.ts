import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './site-urls';
import { Observable } from 'rxjs';
import { AxeScan } from './scan.types';
const SITE_LIST_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class ScanLoaderService {
  constructor(private http: HttpClient) {}

  getMasterJSON(sitename: string, foldername: string) {
    return this.http.get(
      `${SITE_LIST_URL}${ApiUrls.SCANS}/${sitename}/${foldername.replace(
        /:/gi,
        ''
      )}`
    );
  }

  getScanFile(
    sitename: string,
    foldername: string,
    filename: string
  ): Observable<any> {
    return this.http.get(
      `${SITE_LIST_URL}${ApiUrls.SCANS}/${sitename}/${foldername.replace(
        /:/gi,
        ''
      )}/${filename}`
    );
  }
}
