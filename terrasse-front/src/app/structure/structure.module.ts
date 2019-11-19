import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { StructureConfigComponent } from "./structure-config/structure-config.component";
import { StructureCalculatorComponent } from "./structure-calculator/structure-calculator.component";

@NgModule({
  declarations: [StructureConfigComponent, StructureCalculatorComponent],
  exports: [StructureConfigComponent, StructureCalculatorComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class StructureModule { }
