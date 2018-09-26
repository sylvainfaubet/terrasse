import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Point } from '../shared/point';
import { Polygon, PolygonType } from '../shared/polygon';
import { findPointInPolygon, airePolygone, perimetrePolygone } from '../shared/geometrie';

import { EditPointModalComponent } from '../edit-point-modal/edit-point-modal.component';

@Component({
    selector: 'terrasse-drawing-area',
    templateUrl: './drawing-area.component.html',
    styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
    project: any;
    config: any;

    mode = 'add';
    currentPolygon: Polygon;
    svg: any;
    polygonTypes = PolygonType;

    constructor(private el: ElementRef, route: ActivatedRoute, public dialog: MatDialog) {
        route.data.subscribe(data => {
            this.config = data.config;
            this.project = data.project;
        });
    }

    ngOnInit() {
        this.svg = this.el.nativeElement.getElementsByTagName('svg')[0];
        console.log(this);

        if (this.project.polygons.length > 0) {
            this.currentPolygon = this.project.polygons[0];
        } else {
            this.newPolygon(PolygonType.Terrasse);
        }
    }

    getArea() {
        return airePolygone(this.currentPolygon.path);
    }

    getPerimeter() {
        return perimetrePolygone(this.currentPolygon.path);
    }

    getViewboxText() {
        return '0 0 ' + this.project.area.width + ' ' + this.project.area.height;
    }

    newPolygon(type: PolygonType) {
        this.currentPolygon = new Polygon(type);
        this.project.polygons.push(this.currentPolygon);
    }

    formatPoints(polygon: Polygon) {
        return polygon.path.map(point => point.x + ',' + point.y).join(' ');
    }

    onModeChange(value) {
        this.mode = value;
    }

    onClick(event) {
        console.log(event);

        const clickedPoint = this.getClickedPoint(event);
        clickedPoint.roundPosition();

        const foundPoint = findPointInPolygon(this.currentPolygon.path, clickedPoint, 1);
        switch (this.mode) {
            case 'add':
                this.currentPolygon.path.push(clickedPoint);
                break;
            case 'modify':
                if (foundPoint) {
                    const dialogRef = this.dialog.open(EditPointModalComponent, {
                        width: '250px',
                        data: foundPoint,
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        console.log('The dialog was closed', result);
                    });
                }

                break;
            case 'delete':
                if (foundPoint) {
                    this.currentPolygon.path.splice(this.currentPolygon.path.indexOf(foundPoint), 1);
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
