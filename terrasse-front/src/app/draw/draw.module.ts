import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DrawInfoComponent } from './draw-info/draw-info.component';

@NgModule({
  declarations: [DrawInfoComponent],
  exports: [DrawInfoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class DrawModule { }
