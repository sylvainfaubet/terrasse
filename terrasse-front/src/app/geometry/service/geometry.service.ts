import { Point } from '../model';

export const polygonPerimeter = (path: Point[]) => {
    let perimetre = 0;

    for (let i = 1; i < path.length; i++) {
        perimetre += distance(path[i - 1], path[i]);
    }
    if (path.length > 1) {
        perimetre += distance(path[path.length - 1], path[0]);
    }
    return perimetre;
};

export const distance = (a: Point, b: Point) => {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

export const findPointInPolygon = (path: Point[], point: Point, maxDistance: number) => {
    for (const polygonPoint of path) {
        if (distance(point, polygonPoint) < maxDistance) {
            return polygonPoint;
        }
    }
    return undefined;
};

export function computeArea(path: Point[], isSigned: boolean = false): number {
    let aire = 0;
    for (let i = 0; i < path.length; i++) {
        const pi = path[i];
        const pi1 = path[(i + 1) % path.length];
        aire += (pi.x + pi1.x) * (pi1.y - pi.y);
    }
    aire = aire / 2;
    return isSigned ? aire : aire > 0 ? aire : -aire;
}

export const changePointsOrder = (path: Point[], firstToLast: boolean): Point[] => {
    const result = path.slice();
    if (firstToLast) {
        result.push(result.shift());
    } else {
        result.unshift(result.pop());
    }
    return result;
};

function polygonIntersection(pathA: Point[], pathB: Point[]): Point[][] {
    console.log('polygonIntersection', pathA, pathB);

    return [];
}

export function polygonArea(path: Point[], pathsToCut: Point[][] = []): number {
    let areaToRemove = 0;
    pathsToCut.forEach(pathToCut => {
        const intersections = polygonIntersection(path, pathToCut);
        intersections.forEach(intersection => {
            areaToRemove += computeArea(intersection);
        });
    });
    return computeArea(path) - areaToRemove;
}
