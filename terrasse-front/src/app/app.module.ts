import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import { MaterialModule } from './material/material.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'project' },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule'
  }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  exports: [CommonModule, MaterialModule],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, environment.routerConfig),
    MaterialModule,
    ServiceWorkerModule.register('terrasse/ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
  }
}
