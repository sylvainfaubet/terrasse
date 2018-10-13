import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [FlexLayoutModule, MaterialModule, CommonModule],
    declarations: [FooterComponent, DashboardComponent, HeaderComponent],
    exports: [FooterComponent, DashboardComponent, HeaderComponent],
})
export class AppCommonModule {}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    exports: [MaterialModule, FlexLayoutModule],
    imports: [AppCommonModule, BrowserAnimationsModule, BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
    providers: [],
})
export class AppModule {}
