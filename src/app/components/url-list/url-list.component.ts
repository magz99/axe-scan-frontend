import { Component, OnInit, Input } from '@angular/core';
import { Scan } from 'src/app/services/master-scan.types';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.less'],
})
export class UrlListComponent implements OnInit {
  @Input() scannedWebpages: Scan[] = [];

  // scannedWebpages = [
  //   {
  //     url: 'https://www.toyota.ca',
  //     errorCount: 9,
  //     scanUrl: 'page/SOMEID',
  //   },
  //   {
  //     url: 'https://www.toyota.ca/news',
  //     errorCount: 0,
  //     scanUrl: 'page/SOMEID',
  //   },
  // ];

  constructor() {}

  ngOnInit() {}
}
