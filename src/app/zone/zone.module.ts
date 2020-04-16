import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZoneEditComponent } from './components/zone-edit/zone-edit.component';
import { ZoneConfigComponent } from './components/zone-config/zone-config.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [ZoneEditComponent, ZoneConfigComponent],
  exports: [ZoneEditComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
})
export class ZoneModule { }
