import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanWebpageListComponent } from './scan-webpage-list.component';

describe('ScanWebpageListComponent', () => {
  let component: ScanWebpageListComponent;
  let fixture: ComponentFixture<ScanWebpageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanWebpageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanWebpageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
