import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Draw, DrawType, Project } from '../shared/model';
import { DownloadService } from 'src/app/download/download.service';
import { ProjectService } from '../shared/services/project.service';
import { Point } from 'src/app/point/point';
import { Polygon } from 'src/app/polygon/polygon';
import { EditPointModalService } from 'src/app/point/edit-point-modal/edit-point-modal.service';

@Component({
    selector: 'terrasse-configure',
    templateUrl: './configure.component.html',
    styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent implements OnInit {
    currentDrawIndex: number;

    @Input()
    currentDraw: Draw;
    @Output()
    currentDrawChange = new EventEmitter();

    project: Project;

    drawTypes = [DrawType.Piscine, DrawType.Terrasse];
    selectedDrawType = DrawType.Piscine;

    constructor(
        route: ActivatedRoute,
        private downloadService: DownloadService,
        private projectService: ProjectService,
        private router: Router,
        private editPointModalService: EditPointModalService,
    ) {
        route.data.subscribe(data => {
            this.project = data.project;
            this.setCurrentDrawIndex(0);
        });
    }

    ngOnInit() {
        this.setCurrentDrawIndex(this.project.draws.findIndex(item => this.currentDraw === item));
    }

    newDraw(type: DrawType) {
        console.log(type);
        const draw = new Draw(type);
        this.project.draws.push(draw);
        this.setCurrentDrawIndex(this.project.draws.length - 1);
    }

    setCurrentDrawIndex(index: number) {
        this.currentDrawIndex = index;
        this.currentDrawChange.emit(this.project.draws[index]);
    }

    changeCurrentDraw() {
        this.setCurrentDrawIndex((this.currentDrawIndex + 1) % this.project.draws.length);
    }

    removeDraw(draw: Draw) {
        if (this.project.draws.length > 1) {
            this.project.draws = this.project.draws.filter(item => item !== draw);
            if (this.currentDraw === draw) {
                this.setCurrentDrawIndex(0);
            }
        } else {
            alert('on ne peut pas supprimer le dernier dessin sans en créer un autre');
        }
    }

    isNotChangeable(draw: Draw) {
        return draw.polygon.path.length < 3;
    }

    isOnlyOneDraw() {
        return this.project.draws.length === 1;
    }

    changeDrawFirstElement(draw: Draw) {
        draw.polygon.rollFirstToLast();
    }

    reverseDraw(draw: Draw) {
        draw.polygon.path.reverse();
    }

    calcArea(draw) {
        if (draw.type === DrawType.Piscine) {
            return draw.polygon.area();
        }
        return draw.polygon.areaWithoutPolygons(
            this.project.draws.filter(drawItem => drawItem.type === DrawType.Piscine).map(drawItem => drawItem.polygon),
        );
    }
    saveProject() {
        this.downloadService.saveAsJson(this.project);
    }

    loadProject() {
        this.downloadService.getFromJson().then(data => {
            const project = this.projectService.setProjectFromData(data);
            this.router.navigate(['/projects', project.id]);
        });
    }
    movePolygon(polygon: Polygon) {
        const translate = new Point(0, 0);
        this.editPointModalService.modifyPoint(translate).subscribe(() => {
            polygon.move(translate);
        });
    }
}
