import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ZoneConfigComponent } from "./zone-config/zone-config.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ZoneConfigComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [ZoneConfigComponent]
})
export class ZoneModule { }
