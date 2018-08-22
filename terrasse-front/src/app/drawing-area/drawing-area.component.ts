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
        const clickedPoint = new Point(event.offsetX, event.offsetY);
        const foundPoint = findPointInPolygon(this.polygon, clickedPoint);
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
}
