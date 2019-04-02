import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Draw } from '../shared/model';
import { Point } from 'src/app/point/point';

@Component({
    selector: 'terrasse-drawing-area',
    templateUrl: './drawing-area.component.html',
    styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
    @Output()
    clickEvent = new EventEmitter<Point>();

    project: any;
    config: any;

    @Input()
    currentDraw: Draw;

    svg: any;

    constructor(private el: ElementRef, route: ActivatedRoute) {
        route.data.subscribe(data => {
            this.config = data.config;
            this.project = data.project;
        });
    }

    ngOnInit() {
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
    }

    getViewboxText() {
        return '0 0 ' + this.project.zone.width + ' ' + this.project.zone.height;
    }

    formatPoints(draw: Draw) {
        return draw.polygon.getSvgPath();
    }

    onClick(event) {
        this.clickEvent.emit(this.getClickedPoint(event));
    }

    private getClickedPoint(event: any) {
        const svg = event.currentTarget;
        const p = svg.createSVGPoint();

        p.x = event.clientX;
        p.y = event.clientY;

        const goodPoint = p.matrixTransform(svg.getScreenCTM().inverse());

        const clickedPoint: Point = new Point(goodPoint.x, goodPoint.y);
        clickedPoint.roundPosition();
        return clickedPoint;
    }
}
