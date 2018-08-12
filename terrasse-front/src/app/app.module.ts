import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [AppComponent, DashboardComponent, FooterComponent],
	imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, MaterialModule],
	exports: [MaterialModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
