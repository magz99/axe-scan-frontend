import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, NEVER } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MasterScan, Scan } from '../../services/types/master-scan.types';
import { SiteScanFacadeService } from 'src/app/services/site-scan-facade.service';

@Component({
  selector: 'app-scan-webpage-detail',
  templateUrl: './scan-webpage-detail.component.html',
  styleUrls: ['./scan-webpage-detail.component.less'],
})
export class ScanWebpageDetailComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  scans: Scan[];
  siteName: string;
  folderName: string;
  masterScanData: MasterScan = {} as MasterScan;

  constructor(
    private siteScanFacadeService: SiteScanFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptions = this.route.params
      .pipe(
        map((params) => [params.sitename, params.scanfoldername]),
        switchMap((siteValues) => {
          this.siteName = siteValues[0];
          this.folderName = siteValues[1];
          return this.siteScanFacadeService.getMasterJSON(
            this.siteName,
            this.folderName
          );
        }),
        catchError((err) => {
          console.log('scan webpage detail: could not fetch: ', err);
          return NEVER;
        })
      )
      .subscribe((data: MasterScan) => {
        this.masterScanData = data;
        this.scans = this.masterScanData.scannedPages;
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
