import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GetLocationComponent } from './get-location/get-location.component';
import { MaterialModule } from '../material/material.module';

const ROUTES: Route[] = [{
    path: '',
    component: GetLocationComponent
}];

@NgModule({
    declarations: [GetLocationComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class LocationModule { }
