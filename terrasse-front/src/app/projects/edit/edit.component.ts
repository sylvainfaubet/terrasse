import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Point, Polygon, PolygonType, Project} from '../shared/model';
import { EditPointModalComponent } from '../edit-point-modal/edit-point-modal.component';
import { findPointInPolygon } from '../shared/services/geometrie';

@Component({
    selector: 'terrasse-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    project: Project;
    config: any;

    currentPolygon: Polygon;
    mode: String = 'add';
    polygonTypes = PolygonType;

    constructor(route: ActivatedRoute, public dialog: MatDialog) {
        route.data.subscribe(({ project, config }) => {
            this.project = project;
            this.config = config;
        });
        this.doJobOnClickedPoint = this.doJobOnClickedPoint.bind(this);
    }

    ngOnInit() {
        if (this.project.polygons.length > 0) {
            this.currentPolygon = this.project.polygons[0];
        }
    }

    doJobOnClickedPoint(clickedPoint: Point) {
        const foundPoint = findPointInPolygon(this.currentPolygon.path, clickedPoint, 1);

        switch (this.mode) {
            case 'add':
                this.currentPolygon.path.push(clickedPoint);
                break;
            case 'modify':
                if (foundPoint) {
                    this.modifyPoint(foundPoint);
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

    modifyPoint(point: Point) {
        const dialogRef = this.dialog.open(EditPointModalComponent, {
            width: '250px',
            data: point,
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }
}
