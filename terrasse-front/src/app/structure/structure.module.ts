import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { components } from './components';
@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class StructureModule { }
