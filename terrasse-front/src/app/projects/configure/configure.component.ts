import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Draw, DrawType, Project } from '../shared/model';

@Component({
    selector: 'terrasse-configure',
    templateUrl: './configure.component.html',
    styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent implements OnInit {
    modeValue = 'add';

    @Output()
    mode = new EventEmitter();
    @Output()
    change = new EventEmitter();

    currentDrawIndex: number;
    @Input()
    currentDraw: Draw;
    @Output()
    currentDrawChange = new EventEmitter();

    project: Project;

    drawTypes = [DrawType.Piscine, DrawType.Terrasse];
    selectedDrawType = DrawType.Piscine;

    constructor(route: ActivatedRoute) {
        route.data.subscribe(data => {
            this.project = data.project;
        });
    }

    ngOnInit() {
        this.setcurrentDrawIndex(this.project.draws.findIndex(item => this.currentDraw === item));
    }

    newDraw(type: DrawType) {
        console.log(type);
        const draw = new Draw(type);
        this.project.draws.push(draw);
        this.setcurrentDrawIndex(this.project.draws.length - 1);
    }

    setcurrentDrawIndex(index: number) {
        this.currentDrawIndex = index;
        this.currentDrawChange.emit(this.project.draws[index]);
        this.change.emit();
    }

    changeCurrentDraw() {
        this.setcurrentDrawIndex((this.currentDrawIndex + 1) % this.project.draws.length);
    }

    removeDraw(draw: Draw) {
        if (this.project.draws.length > 1) {
            this.project.draws = this.project.draws.filter(item => item !== draw);
            if (this.currentDraw === draw) {
                this.setcurrentDrawIndex(0);
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
        draw.polygon.changeFirstElement();
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
}
