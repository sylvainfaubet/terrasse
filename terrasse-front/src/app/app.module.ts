import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

import { ProjectsModule } from './projects/projects.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, DashboardComponent, FooterComponent],
    exports: [MaterialModule],
    imports: [ProjectsModule, BrowserAnimationsModule, BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
    providers: [],
})
export class AppModule { }
