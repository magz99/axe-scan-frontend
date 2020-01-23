import { Component, OnInit } from '@angular/core';
import { ScanLoaderService } from '../../services/scan-loader.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AxeScan } from 'src/app/services/scan.types';

@Component({
  selector: 'app-scan-detail',
  templateUrl: './scan-detail.component.html',
  styleUrls: ['./scan-detail.component.less'],
})
export class ScanDetailComponent implements OnInit {
  siteName: string;
  folderName: string;
  scanFile: string;
  scanData: AxeScan;
  subscriptions: Subscription;

  constructor(
    private scanService: ScanLoaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptions = this.route.params
      .pipe(
        map(params => [
          params.sitename,
          params.scanfoldername,
          params.scanfile,
        ]),
        switchMap(siteValues => {
          this.siteName = siteValues[0];
          this.folderName = siteValues[1];
          this.scanFile = siteValues[2];
          return this.scanService.getScanFile(
            this.siteName,
            this.folderName,
            this.scanFile
          );
        })
      )
      .subscribe((data: AxeScan) => {
        this.scanData = data;
        console.log(
          'violations length: ',
          this.scanData.violations ? this.scanData.violations.length : 0
        );
      });
  }
}
