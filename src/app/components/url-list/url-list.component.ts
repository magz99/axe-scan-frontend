import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.less'],
})
export class UrlListComponent implements OnInit {
  scannedWebpages = [
    {
      url: 'https://www.toyota.ca',
      errorCount: 9,
      scanUrl: 'page/SOMEID',
    },
    {
      url: 'https://www.toyota.ca/news',
      errorCount: 0,
      scanUrl: 'page/SOMEID',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
