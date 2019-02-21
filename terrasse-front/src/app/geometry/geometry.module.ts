import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Point, Polygon } from './model';

@NgModule({
    declarations: [Point, Polygon],
    imports: [CommonModule],
})
export class GeometryModule {}
