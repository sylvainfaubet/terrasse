import { Point } from '../model';

export const distance = (a: Point, b: Point) => {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

export const findPointInPolygon = (polygon: Array<Point>, point: Point, maxDistance: number) => {
    for (const polygonPoint of polygon) {
        if (distance(point, polygonPoint) < maxDistance) {
            return polygonPoint;
        }
    }
    return undefined;
};
export const perimetrePolygone = (path: Array<Point>) => {
    let perimetre = 0;

    for (let i = 1; i < path.length; i++) {
        perimetre += distance(path[i - 1], path[i]);
    }
    if (path.length > 1) {
        perimetre += distance(path[path.length - 1], path[0]);
    }
    return perimetre;
};

export const airePolygone = (path: Array<Point>) => {
    let aire = 0;
    for (let i = 0; i < path.length; i++) {
        const pi = path[i];
        const pi1 = path[(i + 1) % path.length];
        aire += (pi.x + pi1.x) * (pi1.y - pi.y);
    }
    aire = aire / 2;

    return Math.sqrt(Math.pow(aire, 2));
};

export const changePointsOrder = (path: Array<Point>, firstToLast: boolean) => {
    const result = path.slice();
    if (firstToLast) {
        result.push(result.shift());
    } else {
        result.unshift(result.pop());
    }
    return result;
};
