import { Component, OnInit } from '@angular/core';
import { ScanItem } from './scan-item.types';

@Component({
  selector: 'app-scans-landing',
  templateUrl: './scans-landing.component.html',
  styleUrls: ['./scans-landing.component.less']
})
export class ScansLandingComponent implements OnInit {
  // TODO: each scanItem should have an ID ?
  // In the future, this will come from the DB for a particular user
  allScans: ScanItem[] = [
    {
      name: 'myLocal',
      timestamp: new Date('April 30, 2019'),
      url: '/myLocal'
    },
    {
      name: 'myLocal2',
      timestamp: new Date('September 19, 2019'),
      url: 'https://www.wcagaccessibility.ca'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
