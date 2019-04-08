import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DrawInfoComponent } from './draw-info/draw-info.component';
import { DrawCrudComponent } from './draw-crud/draw-crud.component';
import { DrawTypeSelectorComponent } from './draw-type-selector/draw-type-selector.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DrawInfoComponent, DrawCrudComponent, DrawTypeSelectorComponent],
  exports: [DrawInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DrawModule { }
