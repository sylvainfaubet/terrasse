import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Polygon } from '../shared/model/polygon';
import { PolygonType} from '../shared/model/polygonType';
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

    currentPolygonIndex: number;
    @Input()
    currentPolygon: Polygon;
    @Output()
    currentPolygonChange = new EventEmitter();

    project: Project;

    polygonTypes = [PolygonType.Piscine, PolygonType.Terrasse];
    selectedPolygonType = PolygonType.Piscine;

    constructor(route: ActivatedRoute) {
        route.data.subscribe(data => {
            this.project = data.project;
        });
    }

    ngOnInit() {
        this.setCurrentPolygonIndex(this.project.polygons.findIndex(item => this.currentPolygon === item));
    }

    newPolygon(type: PolygonType) {
        console.log(type);
        const polygon = new Polygon(type);
        this.project.polygons.push(polygon);
        this.setCurrentPolygonIndex(this.project.polygons.length - 1);
    }

    setCurrentPolygonIndex(index: number) {
        this.currentPolygonIndex = index;
        this.currentPolygonChange.emit(this.project.polygons[index]);
    }

    changeCurrentPolygon() {
        this.setCurrentPolygonIndex((this.currentPolygonIndex + 1) % this.project.polygons.length);
    }

    removePolygon(polygon: Polygon) {
        if (this.project.polygons.length > 1) {
            this.project.polygons = this.project.polygons.filter(item => item !== polygon);
            if (this.currentPolygon === polygon) {
                this.setCurrentPolygonIndex(0);
            }
        } else {
            alert('on ne peut pas supprimer le dernier dessin sans en créer un autre');
        }
    }

    isNotChangeablePolygon(polygon: Polygon) {
        return polygon.path.length < 3;
    }
    changePolygonFirstElement(polygon: Polygon) {
        polygon.path.push(polygon.path.shift());
    }

    getPerimeter() {
        return perimetrePolygone(this.currentPolygon.path);
    }
    getArea() {
        return airePolygone(this.currentPolygon.path);
    }
    getTestedArea(){
        return this.currentPolygon.area();
    }
}
