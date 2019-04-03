import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawInfoComponent } from './draw-info/draw-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DrawInfoComponent],
  exports: [DrawInfoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class DrawModule { }
