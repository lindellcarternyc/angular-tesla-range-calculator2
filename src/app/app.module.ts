/*
 * app.module.ts
 */

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';

// Custum modules
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// App component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeslaBatteryModule
  ],
  providers: [

  ], 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}