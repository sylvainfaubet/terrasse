import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Draw } from '../../models/draw';
import { Project } from 'src/app/project/models/project';

@Component({
  selector: 'terrasse-draw-panel',
  templateUrl: './draw-panel.component.html',
  styleUrls: ['./draw-panel.component.scss']
})
export class DrawPanelComponent {

  private _draw: Draw;

  @Input() project: Project;

  @Output() drawChange = new EventEmitter<Draw>();
  @Input() set draw(draw: Draw) {
    this.drawChange.emit(draw);
    this._draw = draw;
  }
  get draw(): Draw {
    return this._draw;
  }

}
