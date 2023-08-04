import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobilePoductComponent } from './shared/components/mobile-poduct/mobile-poduct.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilePoductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
