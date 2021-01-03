import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AxeScan } from 'src/app/services/types/scan.types';
import { SiteScanFacadeService } from 'src/app/services/site-scan-facade.service';

@Component({
  selector: 'app-scan-detail',
  templateUrl: './scan-detail.component.html',
  styleUrls: ['./scan-detail.component.less'],
})
export class ScanDetailComponent implements OnInit {
  siteName = '';
  folderName = '';
  scanFile = '';
  scanData$: Observable<AxeScan>;
  subscriptions: Subscription;

  constructor(
    private siteScanFacadeService: SiteScanFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.scanData$ = this.route.params.pipe(
      map((params) => [
        params.sitename,
        params.scanfoldername,
        params.scanfile,
      ]),
      switchMap((siteValues) => {
        this.siteName = siteValues[0];
        this.folderName = siteValues[1];
        this.scanFile = siteValues[2];
        return this.siteScanFacadeService.getScanFile(
          this.siteName,
          this.folderName,
          this.scanFile
        );
      })
    );
  }
}
