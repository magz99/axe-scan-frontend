import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanWebpageDetailComponent } from './views/scan-webpage-detail/scan-webpage-detail.component';
import { ScanDetailComponent } from './views/scan-detail/scan-detail.component';
import { ScansLandingComponent } from './views/scans-landing/scans-landing.component';
import { SiteScansLandingComponent } from './views/site-scan-landing/site-scan-landing.component';

const routes: Routes = [
  { path: 'sites', component: ScansLandingComponent },
  { path: 'scans/:sitename', component: SiteScansLandingComponent },
  {
    path: 'scans/:sitename/:scanfoldername',
    component: ScanWebpageDetailComponent,
  },
  {
    path: 'scans/:sitename/:scanfoldername/:scanfile',
    component: ScanDetailComponent,
  },
  { path: '', redirectTo: '/sites', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
