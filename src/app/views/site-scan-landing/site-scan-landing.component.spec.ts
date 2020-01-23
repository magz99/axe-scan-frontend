import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteScansLandingComponent } from './site-scan-landing.component';

describe('ScanWebpageDetailComponent', () => {
  let component: SiteScansLandingComponent;
  let fixture: ComponentFixture<SiteScansLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteScansLandingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteScansLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
