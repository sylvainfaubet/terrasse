import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Point } from '../shared/model/point';
import { Polygon } from '../shared/model/polygon';

@Component({
    selector: 'terrasse-drawing-area',
    templateUrl: './drawing-area.component.html',
    styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
    @Input()
    clickPoint: Function;

    project: any;
    config: any;

    @Input()
    currentPolygon: Polygon;

    svg: any;

    constructor(private el: ElementRef, route: ActivatedRoute) {
        route.data.subscribe(data => {
            this.config = data.config;
            this.project = data.project;
        });
    }

    ngOnInit() {
        console.log(this);
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
    }

    getViewboxText() {
        return '0 0 ' + this.project.area.width + ' ' + this.project.area.height;
    }

    formatPoints(polygon: Polygon) {
        return polygon.path.map(point => point.x + ',' + point.y).join(' ');
    }

    onClick(event) {
        this.clickPoint(this.getClickedPoint(event));
    }

    private getClickedPoint(event: any) {
        const svg = event.currentTarget;
        const p = svg.createSVGPoint();

        p.x = event.clientX;
        p.y = event.clientY;

        const goodPoint = p.matrixTransform(svg.getScreenCTM().inverse());

        const clickedPoint: Point = new Point(goodPoint.x, goodPoint.y);
        Point.roundPosition(clickedPoint);
        return clickedPoint;
    }
}
