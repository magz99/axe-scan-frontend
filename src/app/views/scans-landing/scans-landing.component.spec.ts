import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteListingFacadeService } from 'src/app/services/site-listing-facade.service';

import { ScansLandingComponent } from './scans-landing.component';

describe('ScansLandingComponent', () => {
  let component: ScansLandingComponent;
  let fixture: ComponentFixture<ScansLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ScansLandingComponent],
      providers: [SiteListingFacadeService],
    }).compileComponents();
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
