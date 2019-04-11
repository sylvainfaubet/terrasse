import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolygonConfigComponent } from './polygon-config/polygon-config.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule],
    declarations: [PolygonConfigComponent],
    exports: [PolygonConfigComponent],
    providers: [],
})
export class PolygonModule {}
