import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { SiteScanAPIService } from './site-scan-api.service';
import { MasterScan } from './types/master-scan.types';
import { AxeScan } from './types/scan.types';

@Injectable({
  providedIn: 'root',
})
export class SiteScanFacadeService {
  private sitename: string;
  private foldername: string;
  private filename: string;

  private masterJSON$: Observable<MasterScan>;
  private scanFile$: Observable<AxeScan>;

  constructor(private siteScanAPIService: SiteScanAPIService) {}

  getMasterJSON(sName: string, fName: string): Observable<MasterScan> {
    if (sName !== this.sitename || fName !== this.filename) {
      this.masterJSON$ = this.siteScanAPIService
        .getMasterJSON(sName, fName)
        .pipe(
          shareReplay(1),
          catchError((err) => {
            console.log('getMasterJSON error: ', err);
            return of({} as MasterScan);
          })
        );

      this.sitename = sName;
      this.filename = fName;
    }
    return this.masterJSON$;
  }

  getScanFile(
    sName: string,
    folderName: string,
    fName: string
  ): Observable<AxeScan> {
    if (
      sName !== this.sitename ||
      fName !== this.filename ||
      folderName !== this.foldername
    ) {
      this.scanFile$ = this.siteScanAPIService
        .getScanFile(sName, folderName, fName)
        .pipe(
          shareReplay(1),
          catchError((err) => {
            console.log('getScanFile error: ', err);
            return of({} as AxeScan);
          })
        );

      this.sitename = sName;
      this.filename = fName;
      this.foldername = folderName;
    }
    return this.scanFile$;
  }
}
