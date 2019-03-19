import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, Draw, DrawType } from '../shared/model';
import { Point } from '../../geometry/model/point';
import { EditPointModalService } from '../edit-point-modal/edit-point-modal.service';

@Component({
    selector: 'terrasse-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    project: Project;
    config: any;

    currentDraw: Draw;
    mode: String = 'add';
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

        switch (this.mode) {
            case 'add':
                this.currentDraw.polygon.addPoint(clickedPoint);
                break;
            case 'modify':
                if (foundPoint) {
                    this.editPointModalService.modifyPoint(foundPoint);
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
}
