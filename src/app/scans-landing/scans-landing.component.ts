import { Component, OnInit } from '@angular/core';
import { ScanItem } from './scan-item.types';

@Component({
  selector: 'app-scans-landing',
  templateUrl: './scans-landing.component.html',
  styleUrls: ['./scans-landing.component.less'],
})
export class ScansLandingComponent implements OnInit {
  allScans: ScanItem[] = [
    {
      name: 'myLocal',
      timestamp: new Date('April 30, 2019'),
      url: '/myLocal',
    },
    {
      name: 'myLocal2',
      timestamp: new Date('September 19, 2019'),
      url: 'https://www.wcagaccessibility.ca',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
