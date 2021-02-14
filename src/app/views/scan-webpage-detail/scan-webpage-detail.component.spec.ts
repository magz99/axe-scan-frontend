import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanWebpageDetailComponent } from './scan-webpage-detail.component';
import { SiteScanFacadeService } from 'src/app/services/site-scan-facade.service';
import { of } from 'rxjs';

describe('ScanWebpageDetailComponent', () => {
  let component: ScanWebpageDetailComponent;
  let fixture: ComponentFixture<ScanWebpageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ScanWebpageDetailComponent],
      providers: [
        SiteScanFacadeService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ sitename: '', sitefoldername: '' }),
          },
        },
      ],
    }).compileComponents();
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
