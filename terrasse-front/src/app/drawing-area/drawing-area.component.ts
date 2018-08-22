import { Component, OnInit, ElementRef } from '@angular/core';
import { Point } from '../shared/models/Points';

@Component({
    selector: 'terrasse-drawing-area',
    templateUrl: './drawing-area.component.html',
    styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
    polygon: Array<Point>;
    fill = 'red';
    stroke = 'black';

    constructor(private el: ElementRef) {
        this.newPolygon();
    }

    newPolygon() {
        this.polygon = new Array<Point>();
    }

    ngOnInit() {
        console.log(this.el.nativeElement);
    }

    formatPoints(polygon) {
        return polygon.map(point => point.x + ',' + point.y).join(' ');
    }

    onClick(event) {
        console.log(event);
        this.polygon.push(new Point(event.offsetX, event.offsetY));
    }
}
