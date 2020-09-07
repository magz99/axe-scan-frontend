import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const SITE_MASTER_SCAN_URL =
  'https://9fqgrybhg2.execute-api.us-east-1.amazonaws.com/scannedSingleSiteMappingS3';

const SITE_SINGLES_SCAN_URL =
  'https://hlkgqouo08.execute-api.us-east-1.amazonaws.com/singleSiteSingleScan';

@Injectable({
  providedIn: 'root',
})
export class ScanLoaderService {
  constructor(private http: HttpClient) {}

  getMasterJSON(sitename: string, foldername: string) {
    return this.http.get(
      `${SITE_MASTER_SCAN_URL}?siteName=${sitename}&folderName=${foldername.replace(
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
      `${SITE_SINGLES_SCAN_URL}?siteName=${sitename}&folderName=${foldername.replace(
        /:/gi,
        ''
      )}&scanFile=${filename}`
    );
  }
}
