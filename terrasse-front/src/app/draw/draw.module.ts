import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DrawInfoComponent } from './draw-info/draw-info.component';
import { DrawTypeSelectorComponent } from './draw-type-selector/draw-type-selector.component';
import { MaterialModule } from '../material/material.module';
import { DrawsComponent } from './draws/draws.component';
@NgModule({
    declarations: [DrawInfoComponent, DrawTypeSelectorComponent, DrawsComponent],
    exports: [DrawInfoComponent, DrawTypeSelectorComponent, DrawsComponent],
    imports: [CommonModule, MaterialModule, FlexLayoutModule],
})
export class DrawModule {}
