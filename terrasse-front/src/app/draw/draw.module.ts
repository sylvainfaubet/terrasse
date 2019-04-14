import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DrawInfoComponent } from './draw-info/draw-info.component';
import { DrawTypeSelectorComponent } from './draw-type-selector/draw-type-selector.component';
import { MaterialModule } from '../material/material.module';
import { DrawsComponent } from './draws/draws.component';
import { PolygonModule } from '../polygon/polygon.module';

@NgModule({
    declarations: [DrawInfoComponent, DrawTypeSelectorComponent, DrawsComponent],
    exports: [DrawInfoComponent, DrawTypeSelectorComponent, DrawsComponent],
    imports: [CommonModule, PolygonModule, MaterialModule, FlexLayoutModule],
})
export class DrawModule {}
