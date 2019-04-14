import { Injectable } from '@angular/core';
import polygonIntersect from 'polygons-intersect';

import { Point } from '../point/point';
import { Polygon } from './polygon';

@Injectable({
    providedIn: 'root',
})
export class PolygonService {
    constructor() {}

    public polygonIntersections(p1: Polygon, p2: Polygon): Polygon[] {
        if (p1 && p1.path.length > 0 && p2 && p2.path.length > 0) {
            const intersections = polygonIntersect(p1.path, p2.path);
            if (Array.isArray(intersections[0])) {
                return intersections.map(path => new Polygon(path.map(point => new Point(point.x, point.y))));
            }

            return [new Polygon(intersections.map(point => new Point(point.x, point.y)))];
        }
        return [];
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

    public polygonEnglobingRect(polygon: Polygon): Polygon {
        if (polygon && polygon.path.length > 1) {
            const result = {
                minX: polygon.path[0].x,
                maxX: polygon.path[0].x,
                minY: polygon.path[0].y,
                maxY: polygon.path[0].y,
            };

            polygon.path.forEach(point => {
                result.minX = Math.min(result.minX, point.x);
                result.minY = Math.min(result.minY, point.y);
                result.maxX = Math.max(result.maxX, point.x);
                result.maxY = Math.max(result.maxY, point.y);
            });
            return new Polygon([
                new Point(result.minX, result.minY),
                new Point(result.minX, result.maxY),
                new Point(result.maxX, result.maxY),
                new Point(result.maxX, result.minY),
            ]);
        }
        return;
    }

    public getCentroid(polygon: Polygon): Point {
        let length = polygon.path.length;
        let center = polygon.path.reduce(function(last, current) {
            console.log('getCentroid', last, current);
            last.x += current.x / length;
            last.y += current.y / length;
            return last;
        }, new Point(0, 0));

        return center;
    }
}
