import { Point, Polygon } from '../model';

export const polygonPerimeter = (polygon: Polygon) => {
    let perimetre = 0;

    for (let i = 1; i < polygon.path.length; i++) {
        perimetre += distance(polygon.path[i - 1], polygon.path[i]);
    }
    if (polygon.path.length > 1) {
        perimetre += distance(polygon.path[polygon.path.length - 1], polygon.path[0]);
    }
    return perimetre;
};

export const distance = (a: Point, b: Point) => {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

export const findPointInPolygon = (polygon: Polygon, point: Point, maxDistance: number) => {
    for (const polygonPoint of polygon.path) {
        if (distance(point, polygonPoint) < maxDistance) {
            return polygonPoint;
        }
    }
    return undefined;
};

export function computeArea(polygon: Polygon): number {
    let aire = 0;
    for (let i = 0; i < polygon.path.length; i++) {
        const pi = polygon.path[i];
        const pi1 = polygon.path[(i + 1) % polygon.path.length];
        aire += (pi.x + pi1.x) * (pi1.y - pi.y);
    }
    aire = aire / 2;

    console.log(aire);
    return Math.sqrt(Math.pow(aire, 2));
}

export const changePointsOrder = (polygon: Polygon, firstToLast: boolean): Polygon => {
    const result = polygon.path.slice();
    if (firstToLast) {
        result.push(result.shift());
    } else {
        result.unshift(result.pop());
    }
    return new Polygon(result, polygon.isNotClosed);
};

function polygonIntersection(polygonA: Polygon, polygonB: Polygon): Polygon[] {
    console.log(polygonA, polygonB);
    return [];
}

export function polygonArea(polygon: Polygon, polygonsToCut: Polygon[] = []): number {
    let areaToRemove = 0;
    polygonsToCut.forEach(polygonToCut => {
        const intersections = polygonIntersection(polygon, polygonToCut);
        intersections.forEach(intersection => {
            areaToRemove += computeArea(intersection);
        });
    });
    return computeArea(polygon) - areaToRemove;
}
