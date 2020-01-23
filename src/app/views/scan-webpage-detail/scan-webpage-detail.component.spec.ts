import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanWebpageDetailComponent } from './scan-webpage-detail.component';

describe('ScanWebpageDetailComponent', () => {
  let component: ScanWebpageDetailComponent;
  let fixture: ComponentFixture<ScanWebpageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanWebpageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanWebpageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
