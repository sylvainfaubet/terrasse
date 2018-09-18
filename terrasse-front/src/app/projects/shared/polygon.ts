import { Point } from './point';

export enum PolygonType {
    Terrasse = 'terrasse',
    Piscine = 'piscine'
}

export class Polygon {
    type: PolygonType;
    path: Array<Point>;

    constructor(type: PolygonType, path: Array<Point> = []) {
        this.type = type;
        this.path = path;
    }
}
