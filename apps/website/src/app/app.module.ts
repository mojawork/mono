import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {UiModule} from "@mojawork/ui";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
