import { NgModule } from '@angular/core';
import { ZoneEditComponent } from './components/zone-edit/zone-edit.component';
import { ZoneConfigComponent } from './components/zone-config/zone-config.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [ZoneEditComponent, ZoneConfigComponent],
  exports: [ZoneEditComponent],
  imports: [
    SharedModule,
    MatExpansionModule
  ],
})
export class ZoneModule { }
