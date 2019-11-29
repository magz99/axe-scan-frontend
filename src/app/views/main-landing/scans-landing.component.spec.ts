import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScansLandingComponent } from './scans-landing.component';

describe('ScansLandingComponent', () => {
  let component: ScansLandingComponent;
  let fixture: ComponentFixture<ScansLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScansLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScansLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
