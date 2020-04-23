import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'project' },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',
  }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  exports: [CommonModule],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(ROUTES, environment.routerConfig),
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
