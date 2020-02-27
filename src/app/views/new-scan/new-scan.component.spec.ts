/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewScanComponent } from './new-scan.component';

describe('NewScanComponent', () => {
  let component: NewScanComponent;
  let fixture: ComponentFixture<NewScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
