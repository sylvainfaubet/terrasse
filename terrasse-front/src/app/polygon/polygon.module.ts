import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolygonConfigComponent } from './polygon-config/polygon-config.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PolygonInfoComponent } from './polygon-info/polygon-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, FormsModule],
    declarations: [PolygonConfigComponent, PolygonInfoComponent],
    exports: [PolygonConfigComponent, PolygonInfoComponent],
    providers: [],
})
export class PolygonModule {}
