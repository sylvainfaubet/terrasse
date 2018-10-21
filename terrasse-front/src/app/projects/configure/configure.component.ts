import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Polygon, PolygonType } from '../shared/model/polygon';
import { airePolygone, perimetrePolygone } from '../shared/services/geometrie';

import { Project } from '../shared/model/project';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'terrasse-configure',
    templateUrl: './configure.component.html',
    styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent implements OnInit {
    modeValue = 'add';

    @Output()
    mode = new EventEmitter();

    @Input()
    currentPolygon: Polygon;
    @Output()
    currentPolygonChange = new EventEmitter();

    project: Project;

    polygonTypes = PolygonType;

    constructor(route: ActivatedRoute) {
        route.data.subscribe(data => {
            this.project = data.project;
        });
    }

    ngOnInit() {}

    setCurrentPolygon(polygon: Polygon) {
        this.currentPolygonChange.emit(polygon);
    }

    newPolygon(type: PolygonType) {
        const polygon = new Polygon(type);
        this.project.polygons.push(polygon);
        this.setCurrentPolygon(polygon);
    }

    getPerimeter() {
        return perimetrePolygone(this.currentPolygon.path);
    }
    getArea() {
        return airePolygone(this.currentPolygon.path);
    }
}
