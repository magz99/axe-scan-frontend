import { NewScanComponent } from './views/new-scan/new-scan.component';
import { SiteListingAPIService } from './services/site-listing-api.service';
import { StripSuffixPipe } from './pipes/test-pipe/strip-suffix.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScansLandingComponent } from './views/scans-landing/scans-landing.component';
import { ScanDetailComponent } from './views/scan-detail/scan-detail.component';
import { UrlListComponent } from './components/url-list/url-list.component';
import { ScanWebpageDetailComponent } from './views/scan-webpage-detail/scan-webpage-detail.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SiteScansLandingComponent } from './views/site-scan-landing/site-scan-landing.component';
import { SiteScanAPIService } from './services/site-scan-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NewScanComponent,
    ScansLandingComponent,
    SiteScansLandingComponent,
    ScanDetailComponent,
    UrlListComponent,
    ScanWebpageDetailComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent,
    StripSuffixPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [SiteListingAPIService, SiteScanAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
