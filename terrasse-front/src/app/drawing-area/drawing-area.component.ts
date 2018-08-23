import { Component, OnInit } from '@angular/core';
import { Point, findPointInPolygon } from '../shared/geometrie';

@Component({
    selector: 'terrasse-drawing-area',
    templateUrl: './drawing-area.component.html',
    styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
    polygon: Array<Point>;
    fill = 'red';
    stroke = 'black';
    mode = 'add';
    viewboxText = '0 0 20 15';

    constructor() {}

    ngOnInit() {
        this.newPolygon();
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
