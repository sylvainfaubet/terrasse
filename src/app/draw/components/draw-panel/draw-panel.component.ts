import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Draw } from '../../models/draw';

@Component({
  selector: 'terrasse-draw-panel',
  templateUrl: './draw-panel.component.html',
  styleUrls: ['./draw-panel.component.scss']
})
export class DrawPanelComponent implements OnInit {

  private _draw: Draw;

  @Input() project: any;

  @Output() drawChange = new EventEmitter<Draw>();
  @Input() set draw(draw: Draw) {
    this.drawChange.emit(draw);
    this._draw = draw;
  }
  get draw(): Draw {
    return this._draw;
  }







}
