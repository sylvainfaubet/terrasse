import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Draw } from 'src/app/draw/models/draw';
import { Point } from 'src/app/point/models/point';
import { Project } from 'src/app/project/models/project';
import { ProjectConfig } from 'src/app/project/models/project-config';

@Component({
  selector: 'terrasse-drawing-area',
  templateUrl: './drawing-area.component.html',
  styleUrls: ['./drawing-area.component.scss']
})
export class DrawingAreaComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<Point>();

  @Input() project: Project;
  @Input() config: ProjectConfig;

  @Input() draw: Draw;

  svg: SVGAElement;

  constructor(private readonly el: ElementRef, route: ActivatedRoute) {
    route.data.subscribe(data => {
      this.config = data.config;
      this.project = data.project;
    });
  }

  ngOnInit(): void {
    this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
  }

  getViewboxText(): string {
    return '0 0 ' + this.project.zone.width + ' ' + this.project.zone.height;
  }

  formatPoints(draw: Draw): string {
    return draw.polygon.getSvgPath();
  }

  onClick(event): void {
    this.clickEvent.emit(this.getClickedPoint(event));
  }

  private getClickedPoint(event): Point {

    const svg = event.currentTarget;
    const p = svg.createSVGPoint();

    p.x = event.clientX;
    p.y = event.clientY;

    const transformation = svg.getScreenCTM().inverse();

    const goodPoint = p.matrixTransform(transformation);
    if (window.navigator.vendor !== 'Google Inc.') {
      goodPoint.y += svg.height.baseVal.value;
    }

    const clickedPoint: Point = new Point(goodPoint.x, goodPoint.y);
    clickedPoint.roundPosition();

    return clickedPoint;
  }
}
