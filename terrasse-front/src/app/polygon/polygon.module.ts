import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { components } from "./components";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: components,
  exports: components,
  providers: [],
})
export class PolygonModule { }
