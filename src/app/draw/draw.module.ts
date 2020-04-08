import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PolygonModule } from '../polygon/polygon.module';
import { NgModule } from '@angular/core';
import { DrawingAreaComponent } from './components/drawing-area/drawing-area.component';
import { DrawInfoComponent } from './components/draw-info/draw-info.component';
import { DrawsComponent } from './components/draws/draws.component';
import { DrawTypeSelectorComponent } from './components/draw-type-selector/draw-type-selector.component';
import { DrawPanelComponent } from './components/draw-panel/draw-panel.component';

@NgModule({
  declarations: [DrawingAreaComponent, DrawInfoComponent, DrawTypeSelectorComponent, DrawsComponent, DrawPanelComponent],
  exports: [DrawingAreaComponent, DrawPanelComponent],
  imports: [CommonModule, PolygonModule, MaterialModule],
})
export class DrawModule { }
