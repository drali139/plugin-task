import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';

// No need to import AppComponent directly as it is standalone
@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Initialize Ionic
    AppRoutingModule // Your routing module
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // Route reuse strategy
  ]
  // No declarations array needed for standalone components
})
export class AppModule {}
