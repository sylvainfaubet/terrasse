import { Point } from './point';
import { polygonPerimeter, findPointInPolygon, polygonArea } from '../service/geometry.service';
export class Polygon {
    constructor(public path: Point[] = [], public isNotClosed: Boolean = false) { }

    areaWithoutPolygons(polygons: Polygon[]) {
        return polygonArea(this.path, polygons.map(poly => poly.path));
    }

    area(isSigned: boolean = false) {
        let aire = 0;
        for (let i = 0; i < this.path.length; i++) {
            const pi = this.path[i];
            const pi1 = this.path[(i + 1) % this.path.length];
            aire += (pi.x + pi1.x) * (pi1.y - pi.y);
        }
        aire = aire / 2;
        return aire > 0 ? aire : isSigned ? aire : -aire;
    }

    perimeter() {
        return polygonPerimeter(this.path);
    }

    getPointAtMax(point: Point, maxDistance: number = 1) {
        return findPointInPolygon(this.path, point, maxDistance);
    }

    getSvgPath() {
        return this.path.map(point => (point.x || 0) + ',' + (point.y || 0)).join(' ');
    }

    addPoint(point: Point) {
        this.path.push(point);
    }

    removePoint(point: Point) {
        this.path.splice(this.path.indexOf(point), 1);
    }

    changeFirstElement() {
        this.path.push(this.path.shift());
    }

    setFromJSON(data) {
        if (data.isNotClosed !== undefined) {
            this.isNotClosed = data.isNotClosed;
        }
        if (Array.isArray(data.path)) {
            this.path = data.path.map(point => new Point(point.x, point.y));
        }
    }
    move(translate: Point) {
        this.path.forEach(point => {
            point.x += translate.x;
            point.y += translate.y;
        });
    }
}
