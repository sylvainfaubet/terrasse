import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeometryService } from './geometry.service';

@NgModule({
    imports: [CommonModule],
    providers: [GeometryService],
})
export class GeometryModule { }
