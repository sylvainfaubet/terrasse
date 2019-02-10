import { Point } from './point';
import { PolygonType } from './polygonType';
import { Structure } from './structure';

export class Polygon {
    constructor(public type: PolygonType, public path: Array<Point> = new Array<Point>(), public structure: Structure = new Structure(), public name?: String) {}
}
