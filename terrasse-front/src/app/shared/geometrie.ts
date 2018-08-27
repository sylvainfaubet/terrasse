export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    roundPosition() {
        this.x = Math.round(this.x * 2) / 2;
        this.y = Math.round(this.y * 2) / 2;
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

export const perimetrePolygone = (path:Array<Point>) => {
    var perimetre = 0;

    for ( var i = 1; i < path.length; i++) {
        var tmp1 = path[i - 1];
        var tmp2 = path[i];

        perimetre += distance(tmp1, tmp2);
    }
    if (path.length > 1) {
        perimetre += distance(path[path.length - 1], path[0]);
    }
    return perimetre;
}

export const airePolygone = (path:Array<Point>) => {
    var aire = 0;
    for ( var i = 0; i < path.length; i++) {
        var pi = path[i];
        var pi1 = path[(i + 1) % path.length];
        aire += (pi.x + pi1.x) * (pi1.y - pi.y);
    }
    aire = aire / 2;

    return Math.sqrt(Math.pow(aire, 2));
}
