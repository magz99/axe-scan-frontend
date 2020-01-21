import { SiteListingService } from './services/site-listing.service';
import { StripSuffixPipe } from './pipes/test-pipe/strip-suffix.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScansLandingComponent } from './views/main-landing/scans-landing.component';
import { ScanDetailComponent } from './views/scan-landing/scan-detail.component';
import { UrlListComponent } from './components/url-list/url-list.component';
import { ScanWebpageDetailComponent } from './views/webpage-landing/scan-webpage-detail.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SiteScansLandingComponent } from './views/site-landing/site-scan-landing.component';
import { ScanLoaderService } from './services/scan-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    ScansLandingComponent,
    SiteScansLandingComponent,
    ScanDetailComponent,
    UrlListComponent,
    ScanWebpageDetailComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent,
    StripSuffixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SiteListingService, ScanLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
