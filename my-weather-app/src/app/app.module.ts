import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from './sdk/sdk-client';
import { environment } from '../../environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: API_BASE_URL, useValue: getBaseUrl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function getBaseUrl() {
  const url = environment.API_BASE;
  return url.substring(0,url.length -1 );
}
