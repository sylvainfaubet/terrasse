import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import {
  PolygonMoveComponent,
  PolygonRollComponent,
  PolygonConfigComponent,
  PolygonRotateComponent,
  PolygonInfoComponent
} from "./components";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [PolygonConfigComponent, PolygonMoveComponent, PolygonRollComponent, PolygonRotateComponent, PolygonInfoComponent],
  exports: [PolygonConfigComponent, PolygonInfoComponent],
  providers: [],
})
export class PolygonModule { }
