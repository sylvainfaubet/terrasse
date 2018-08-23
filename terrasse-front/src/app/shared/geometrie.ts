export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export const findPointInPolygon = (polygon: Array<Point>, point: Point, maxDistance: number) => {
    for (const polygonPoint of polygon) {
        if (distance(point, polygonPoint) < maxDistance) {
            return polygonPoint;
        }
    }
    return undefined;
};

export const distance = (a: Point, b: Point) => {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};
