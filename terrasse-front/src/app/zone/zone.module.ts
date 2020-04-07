import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZoneEditComponent } from './components/zone-edit/zone-edit.component';
import { ZoneConfigComponent } from './components/zone-config/zone-config.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ZoneEditComponent, ZoneConfigComponent],
  exports: [ZoneEditComponent],
  imports: [
    MaterialModule,
    FormsModule
  ],
})
export class ZoneModule { }
