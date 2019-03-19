import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeometryService } from './service/geometry.service';

@NgModule({
    imports: [CommonModule],
    providers: [{provide: GeometryService}],
})
export class GeometryModule {}
