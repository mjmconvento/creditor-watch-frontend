import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleScrapperComponent } from './google-scrapper/google-scrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    GoogleScrapperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [
    GoogleScrapperComponent
  ]
})

export class AppModule { }
