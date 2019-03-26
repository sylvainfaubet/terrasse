import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, Draw, DrawType } from '../shared/model';
import { Point } from 'src/app/geometry/point.model';
import { EditPointModalService } from 'src/app/point/edit-point-modal/edit-point-modal.service';
import { Mode } from 'src/app/point/mode/mode.model';

@Component({
    selector: 'terrasse-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    project: Project;
    config: any;

    currentDraw: Draw;
    mode: Mode = Mode.ADD;
    polygonTypes = DrawType;

    constructor(route: ActivatedRoute, private editPointModalService: EditPointModalService) {
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
        console.log('doJobOnClickedPoint', this.mode);
        switch (this.mode) {
            case Mode.ADD:
                this.currentDraw.polygon.addPoint(clickedPoint);
                break;
            case Mode.MODIFY:
                if (foundPoint) {
                    this.editPointModalService.modifyPoint(foundPoint);
                }
                break;
            case Mode.SUPPRESS:
                if (foundPoint) {
                    this.currentDraw.polygon.removePoint(foundPoint);
                }
                break;
            default:
        }
    }
}
