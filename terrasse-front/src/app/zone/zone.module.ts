import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZoneConfigComponent } from './zone-config/zone-config.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ZoneConfigComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [ZoneConfigComponent]
})
export class ZoneModule { }
