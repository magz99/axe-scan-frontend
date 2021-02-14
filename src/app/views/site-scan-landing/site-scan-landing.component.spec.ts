import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SiteListingFacadeService } from 'src/app/services/site-listing-facade.service';

import { SiteScansLandingComponent } from './site-scan-landing.component';

describe('SiteScansLandingComponent', () => {
  let component: SiteScansLandingComponent;
  let fixture: ComponentFixture<SiteScansLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SiteScansLandingComponent],
      providers: [
        SiteListingFacadeService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ sitename: '' }),
          },
        },
      ],
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
