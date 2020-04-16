import { CommonModule } from '@angular/common';
import { PolygonModule } from '../polygon/polygon.module';
import { NgModule } from '@angular/core';
import { DrawingAreaComponent } from './components/drawing-area/drawing-area.component';
import { DrawInfoComponent } from './components/draw-info/draw-info.component';
import { DrawsComponent } from './components/draws/draws.component';
import { DrawTypeSelectorComponent } from './components/draw-type-selector/draw-type-selector.component';
import { DrawPanelComponent } from './components/draw-panel/draw-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '@shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DrawingAreaComponent, DrawInfoComponent, DrawTypeSelectorComponent, DrawsComponent, DrawPanelComponent],
  exports: [DrawingAreaComponent, DrawPanelComponent],
  imports: [CommonModule, PolygonModule, SharedModule, MatExpansionModule, MatSelectModule, MatFormFieldModule],
})
export class DrawModule { }
