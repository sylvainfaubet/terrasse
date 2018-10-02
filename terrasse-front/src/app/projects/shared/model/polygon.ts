import { Point } from './point';

export enum PolygonType {
    Terrasse = 'terrasse',
    Piscine = 'piscine',
}

export class Polygon {
    constructor(public type: PolygonType, public path: Array<Point> = [], public name?: String) {}
}
