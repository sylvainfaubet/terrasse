import { Point } from './point';
import { PolygonType } from './polygonType';
import { Structure } from './structure';
import * as PolygonLib from "polygon";

export class Polygon {
    constructor(public type: PolygonType, public path: Array<Point> = new Array<Point>(), public structure: Structure = new Structure(), public name?: String) {}

    area(polygonsToCut : Array<Polygon> = []){
        let polygon = new PolygonLib(this.path);
        polygonsToCut.forEach(polygonToCut => {
           polygon = polygon.cut(new PolygonLib(polygonToCut.path));
        });
        return polygon.area();
    }
}
