import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Draw } from 'src/app/draw/draw';
import { Project } from '../project';

@Component({
  selector: 'terrasse-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent {
  currentDrawValue: Draw;

  @Input()
  get currentDraw() {
    return this.currentDrawValue;
  }
  @Output() currentDrawChange = new EventEmitter();
  set currentDraw(draw: Draw) {
    this.currentDrawValue = draw;
    this.currentDrawChange.emit(draw);
  }

  project: Project;

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => {
      this.project = data.project;
      this.currentDraw = data.project.draws[0];
    });
  }

  isLargeScreen() {
    // return this.mediaObserver.isActive('lg');
  }
}
