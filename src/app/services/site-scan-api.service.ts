import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasterScan } from './types/master-scan.types';
import { AxeScan } from './types/scan.types';

@Injectable({
  providedIn: 'root',
})
export class SiteScanAPIService {
  constructor(private http: HttpClient) {}

  getMasterJSON(sitename: string, foldername: string): Observable<MasterScan> {
    return this.http.get<MasterScan>(
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
  ): Observable<AxeScan> {
    return this.http.get<AxeScan>(
      `api/singleSiteSingleScan?siteName=${sitename}&folderName=${foldername.replace(
        /:/gi,
        ''
      )}&scanFile=${filename}`
    );
  }
}
