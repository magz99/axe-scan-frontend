import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-webpage-list',
  templateUrl: './scan-webpage-list.component.html',
  styleUrls: ['./scan-webpage-list.component.less']
})
export class ScanWebpageListComponent implements OnInit {
  scannedWebpages = [
    {
      url: 'https://www.toyota.ca',
      errorCount: 9,
      scanUrl: 'page/SOMEID'
    },
    {
      url: 'https://www.toyota.ca/news',
      errorCount: 0,
      scanUrl: 'page/SOMEID'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
