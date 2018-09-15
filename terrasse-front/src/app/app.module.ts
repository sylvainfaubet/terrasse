import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';

import { ProjectsModule } from './projects/projects.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, DashboardComponent, FooterComponent, DrawingAreaComponent],
    exports: [MaterialModule],
    imports: [ProjectsModule, BrowserAnimationsModule, BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
    providers: [],
})
export class AppModule {}
