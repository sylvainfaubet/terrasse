import { Injectable } from '@angular/core';
import polygonIntersect from 'polygons-intersect';

import { Point } from '../point/point';
import { Polygon } from './polygon';

@Injectable({
  providedIn: 'root',
})
export class PolygonService {

    constructor() { }

    public polygonIntersections(p1: Polygon, p2: Polygon): Polygon[] {
        const intersections = polygonIntersect(p1.path, p2.path);
        if (Array.isArray(intersections[0])) {
            return intersections.map((path) => new Polygon(path.map((point) => new Point(point.x, point.y))));
        }

        return [new Polygon(intersections.map((point) => new Point(point.x, point.y)))];
    }

    public polygonAreaWithoutCuts(polygon: Polygon, polygonsToCut: Polygon[]) {
        let areaToRemove = 0;
        polygonsToCut.forEach((polygonToCut: Polygon) => {
            const intersections = this.polygonIntersections(polygon, polygonToCut);
            intersections.forEach((intersect: Polygon) => {
                areaToRemove += intersect.area();
            });
        });

        return polygon.area() - areaToRemove;
    }

}
