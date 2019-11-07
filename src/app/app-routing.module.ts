import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { ScansLandingComponent } from './scans-landing/scans-landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanWebpageDetailComponent } from './scan-webpage-detail/scan-webpage-detail.component';

const routes: Routes = [
  { path: 'scans', component: ScansLandingComponent },
  { path: 'scan/:id', component: ScanWebpageDetailComponent },
  { path: 'scan/:id/page/:id', component: ScanDetailComponent },
  { path: '', redirectTo: '/scans', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
