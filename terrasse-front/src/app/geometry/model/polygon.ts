import { Point } from './point';
import { polygonPerimeter, findPointInPolygon, polygonArea } from '../service/geometry.service';
export class Polygon {
    constructor(public path: Array<Point> = [], public isNotClosed: Boolean = false) {}

    area(polygonsToCut: Array<Polygon>) {
        return polygonArea(this, polygonsToCut);
    }

    perimeter() {
        return polygonPerimeter(this);
    }

    getPointAtMax(point: Point, maxDistance: number = 1) {
        return findPointInPolygon(this, point, maxDistance);
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
}
