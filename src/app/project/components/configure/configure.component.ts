import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Draw } from 'src/app/draw/models/draw';
import { Project } from '../../models/project';

@Component({
  selector: 'terrasse-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent {
  private _draw: Draw;

  @Output() drawChange = new EventEmitter<Draw>();

  @Input() set draw(draw: Draw) {
    this.drawChange.emit(draw);
    this._draw = draw;
  }

  get draw(): Draw {
    return this._draw;
  }

  @Input() project: Project;


}
