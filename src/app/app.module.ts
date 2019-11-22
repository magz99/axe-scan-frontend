import { MagzTestPipe } from './pipes/test-pipe/magz-test.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScansLandingComponent } from './scans-landing/scans-landing.component';
import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { ScanWebpageListComponent } from './scan-webpage-list/scan-webpage-list.component';
import { ScanWebpageDetailComponent } from './scan-webpage-detail/scan-webpage-detail.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ScansLandingComponent,
    ScanDetailComponent,
    ScanWebpageListComponent,
    ScanWebpageDetailComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    MagzTestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
