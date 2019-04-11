import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolygonConfigComponent } from './polygon-config/polygon-config.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, MaterialModule, FlexLayoutModule],
    declarations: [PolygonConfigComponent],
    exports: [PolygonConfigComponent],
    providers: [],
})
export class PolygonModule {}
