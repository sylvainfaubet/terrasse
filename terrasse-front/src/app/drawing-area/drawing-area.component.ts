import { Component, OnInit, ElementRef } from '@angular/core';

import { Point, findPointInPolygon, airePolygone, perimetrePolygone } from '../shared/geometrie';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'terrasse-drawing-area',
    templateUrl: './drawing-area.component.html',
    styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
    project: any;
    config: any;

    mode = 'add';
    currentPolygon: Array<Point>;
    svg: any;
    viewBoxRatioDone: boolean;

    constructor(private el: ElementRef, route: ActivatedRoute) {
        this.project = route.snapshot.data.project;
        this.config = route.snapshot.data.config;
    }

    ngOnInit() {
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
        console.log('DrawingAreaComponent ngOnInit', this);

        this.currentPolygon = this.project.objects[0].polygon;
    }

    getArea() {
        return airePolygone(this.project.objects[0].polygon);
    }

    getPerimeter() {
        return perimetrePolygone(this.project.objects[0].polygon);
    }

    getViewboxText() {
        return '0 0 ' + this.project.area.width + ' ' + this.project.area.height;
    }

    newPolygon(type: string) {
        this.currentPolygon = new Array<Point>();
        this.project.objects.push({ type, polygon: this.currentPolygon });
    }

    formatPoints(polygon) {
        return polygon.map(point => point.x + ',' + point.y).join(' ');
    }

    onModeChange(value) {
        this.mode = value;
    }

    onClick(event) {
        console.log(event);

        const clickedPoint = this.getClickedPoint(event);

        clickedPoint.roundPosition();

        const foundPoint = findPointInPolygon(this.currentPolygon, clickedPoint, 1);
        switch (this.mode) {
            case 'add':
                this.currentPolygon.push(clickedPoint);
                break;
            case 'modify':
                break;
            case 'delete':
                if (foundPoint) {
                    this.currentPolygon.splice(this.currentPolygon.indexOf(foundPoint), 1);
                }
                break;
            default:
        }
    }

    private getClickedPoint(event: any) {
        const svg = event.currentTarget;
        const p = svg.createSVGPoint();

        p.x = event.clientX;
        p.y = event.clientY;

        const goodPoint = p.matrixTransform(svg.getScreenCTM().inverse());

        return new Point(goodPoint.x, goodPoint.y);
    }
}
