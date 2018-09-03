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
    polygon: Array<Point>;
    mode = 'add';
    svg: any;
    viewBoxRatioDone: boolean;

    constructor(private el: ElementRef) {
        this.project = {
            area: {
                height: 15,
                width: 25,
            },
        };

        this.config = {
            fill: 'red',
            stroke: 'black',
        };
    }

    ngOnInit() {
        this.newPolygon();
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
    }

    getArea(polygon) {
        return airePolygone(polygon);
    }

    getPerimeter(polygon) {
        return perimetrePolygone(polygon);
    }

    getViewboxText() {
        return '0 0 ' + this.project.area.width + ' ' + this.project.area.height;
    }

    newPolygon() {
        this.polygon = new Array<Point>();
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

        const foundPoint = findPointInPolygon(this.polygon, clickedPoint, 1);
        switch (this.mode) {
            case 'add':
                this.polygon.push(clickedPoint);
                break;
            case 'modify':
                break;
            case 'delete':
                if (foundPoint) {
                    this.polygon.splice(this.polygon.indexOf(foundPoint), 1);
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
