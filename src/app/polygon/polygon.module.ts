import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PolygonMoveComponent,
  PolygonRollComponent,
  PolygonConfigComponent,
  PolygonRotateComponent,
  PolygonInfoComponent
} from './components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [PolygonConfigComponent, PolygonMoveComponent, PolygonRollComponent, PolygonRotateComponent, PolygonInfoComponent],
  exports: [PolygonConfigComponent, PolygonInfoComponent],
  providers: [],
})
export class PolygonModule { }
