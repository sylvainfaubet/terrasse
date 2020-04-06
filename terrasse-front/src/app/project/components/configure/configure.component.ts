import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Draw } from 'src/app/draw/models/draw';
import { Project } from '../../models/project';

@Component({
  selector: 'terrasse-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent {

  @Input() currentDraw: Draw;
  @Output() currentDrawChange = new EventEmitter();

  @Input() project: Project;

  constructor() { }
}
