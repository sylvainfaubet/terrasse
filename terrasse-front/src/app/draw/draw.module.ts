import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PolygonModule } from '../polygon/polygon.module';
import { NgModule } from '@angular/core';
import { components } from './components';

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, PolygonModule, MaterialModule],
})
export class DrawModule { }
