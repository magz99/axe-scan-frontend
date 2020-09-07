import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScanLoaderService {
  constructor(private http: HttpClient) {}

  getMasterJSON(sitename: string, foldername: string) {
    return this.http.get(
      `api/scannedSingleSiteMappingS3?siteName=${sitename}&folderName=${foldername.replace(
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
      `api/singleSiteSingleScan?siteName=${sitename}&folderName=${foldername.replace(
        /:/gi,
        ''
      )}&scanFile=${filename}`
    );
  }
}
