import { Injectable } from '@angular/core';
import { Point } from './point.model';
import polygonIntersect from 'polygons-intersect';

@Injectable({
    providedIn: 'root'
})
export class GeometryService {

    constructor() { }

    distance (a: Point, b: Point) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    }

    polygonPerimeter (path: Point[]) {
            let perimetre = 0;

            for (let i = 1; i < path.length; i++) {
                perimetre += this.distance(path[i - 1], path[i]);
            }
            if (path.length > 1) {
                perimetre += this.distance(path[path.length - 1], path[0]);
            }
            return perimetre;
    }


    findPointInPolygon (path: Point[], point: Point, maxDistance: number)  {
        for (const polygonPoint of path) {
            if (this.distance(point, polygonPoint) < maxDistance) {
                return polygonPoint;
            }
        }
        return undefined;
    }

    computeArea(path: Point[], isSigned: boolean = false): number {
        let aire = 0;
        for (let i = 0; i < path.length; i++) {
            const pi = path[i];
            const pi1 = path[(i + 1) % path.length];
            aire += (pi.x + pi1.x) * (pi1.y - pi.y);
        }
        aire = aire / 2;
        return isSigned ? aire : aire > 0 ? aire : -aire;
    }

    changePointsOrder (path: Point[], firstToLast: boolean): Point[]  {
        const result = path.slice();
        if (firstToLast) {
            result.push(result.shift());
        } else {
            result.unshift(result.pop());
        }
        return result;
    }

    polygonIntersection(pathA: Point[], pathB: Point[]): Point[][] {
        console.log('polygonIntersection', pathA, pathB);
        if (pathA.length === 0 && pathB.length === 0) {
            return [];
        }
        const intersections = polygonIntersect(pathA, pathB);
        if (Array.isArray(intersections[0])) {
            return intersections.map(path => path.map(point => new Point(point.x, point.y)));
        }
        return [intersections.map(point => new Point(point.x, point.y))];
    }

    polygonArea(path: Point[], pathsToCut: Point[][] = []): number {
        let areaToRemove = 0;
        pathsToCut.forEach(pathToCut => {
            const intersections = this.polygonIntersection(path, pathToCut);
            intersections.forEach(intersection => {
                areaToRemove += this.computeArea(intersection);
            });
        });
        return this.computeArea(path) - areaToRemove;
    }
}