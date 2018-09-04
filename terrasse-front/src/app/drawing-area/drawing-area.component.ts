import { Component, OnInit, ElementRef } from '@angular/core';
import { Point, findPointInPolygon, airePolygone, perimetrePolygone } from '../shared/geometrie';

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

    constructor(private el: ElementRef) {
        this.project = {
            area: {
                height: 15,
                width: 25,
            },
            objects: [
                {
                    type: 'terrasse',
                    polygon: [{ x: 0, y: 0 }, { x: 13, y: 0 }, { x: 13, y: 10 }, { x: 0, y: 10 }],
                },
                {
                    type: 'piscine',
                    polygon: [{ x: 2, y: 2 }, { x: 9, y: 2 }, { x: 9, y: 8 }, { x: 2, y: 8 }],
                },
            ],
        };

        this.config = {
            terrasse: {
                fill: 'red',
                stroke: 'black',
            },
            piscine: {
                fill: 'lightblue',
                stroke: 'black',
            },
        };

        this.currentPolygon = this.project.objects[0].polygon;
    }

    ngOnInit() {
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
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

        let goodPoint = p.matrixTransform(svg.getScreenCTM().inverse());

        return new Point(goodPoint.x, goodPoint.y);
    }
}
