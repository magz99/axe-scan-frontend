import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanWebpageDetailComponent } from './views/webpage-landing/scan-webpage-detail.component';
import { ScanDetailComponent } from './views/scan-landing/scan-detail.component';
import { ScansLandingComponent } from './views/main-landing/scans-landing.component';

const routes: Routes = [
  { path: 'scans', component: ScansLandingComponent },
  { path: 'scan/:id', component: ScanWebpageDetailComponent },
  { path: 'scan/:id/page/:id', component: ScanDetailComponent },
  { path: '', redirectTo: '/scans', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
