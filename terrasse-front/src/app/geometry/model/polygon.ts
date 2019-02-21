import { Point } from './point';
export class Polygon {
    constructor(public path: Array<Point> = [], public isNotClosed: Boolean = false) {}

    area(polygonsToCut: Array<Polygon>) {
        polygonsToCut.forEach(polygon => {
            console.log(polygon);
        });
        return 0;
    }

    perimeter() {}
}
