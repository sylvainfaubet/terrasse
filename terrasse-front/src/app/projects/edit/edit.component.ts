import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Project, Draw, DrawType } from '../shared/model';
import { Point } from '../../geometry/geometry.module';
import { EditPointModalComponent } from '../edit-point-modal/edit-point-modal.component';

@Component({
    selector: 'terrasse-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    project: Project;
    config: any;

    currentDraw: Draw;
    mode: String = 'add';
    polygonTypes = DrawType;

    constructor(route: ActivatedRoute, public dialog: MatDialog) {
        route.data.subscribe(({ project, config }) => {
            this.project = project;
            this.config = config;
        });
        this.doJobOnClickedPoint = this.doJobOnClickedPoint.bind(this);
    }

    ngOnInit() {
        if (this.project.draws.length > 0) {
            this.currentDraw = this.project.draws[0];
        }
    }

    doJobOnClickedPoint(clickedPoint: Point) {
        const foundPoint = this.currentDraw.polygon.getPointAtMax(clickedPoint, 1);

        switch (this.mode) {
            case 'add':
                this.currentDraw.polygon.addPoint(clickedPoint);
                break;
            case 'modify':
                if (foundPoint) {
                    this.modifyPoint(foundPoint);
                }
                break;
            case 'delete':
                if (foundPoint) {
                    this.currentDraw.polygon.removePoint(foundPoint);
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
