import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { components } from "./components";

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
})
export class ZoneModule { }
