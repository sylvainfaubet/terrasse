import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, FooterComponent, HeaderComponent],
    exports: [FooterComponent, HeaderComponent, MaterialModule, FlexLayoutModule],
    imports: [CommonModule, BrowserAnimationsModule, BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
    providers: [],
})
export class AppModule {}
