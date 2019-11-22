import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  Input,
} from '@angular/core';
import { ScanItem } from './scan-item.types';

@Component({
  selector: 'app-scans-landing',
  templateUrl: './scans-landing.component.html',
  styleUrls: ['./scans-landing.component.less'],
})
export class ScansLandingComponent implements OnInit, OnDestroy, OnChanges {
  myName = 'bye';
  // TODO: each scanItem should have an ID ?
  // In the future, this will come from the DB for a particular user
  @Input() tempMagz = 0;
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

  // Use ngOnInit for:
  // To perform complex initializations shortly after construction
  // To set up the component after Angular sets the input properties.
  ngOnInit() {
    // setInterval(() => {
    //   this.tempMagz++;
    // }, 1000);
  }

  // Put cleanup logic in ngOnDestroy(), the logic that must run before Angular destroys the directive.
  // This is the place to free resources that won't be garbage collected automatically.
  // Unsubscribe from Observables and DOM events. Stop interval timers. Unregister all callbacks that
  //  this directive registered with global or application services. You risk memory leaks if you neglect to do so.
  // This is the time to notify another part of the application that the component is going away.
  ngOnDestroy() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Simple Changes: ', changes);
  }

  changeSomeName() {
    this.myName = 'HELLO';
  }
}
