import { distance, findPointInPolygon, polygonPerimeter, changePointsOrder, polygonArea } from './geometry.service';
import { Point, Polygon } from '../model';
import { cases } from './geometry.test_cases';

let point1, point2, point3: Point;
let polygon: Polygon;
describe('geometrie', () => {
    beforeEach(() => {
        point1 = new Point(0, 0);
        point2 = new Point(3, 4);
        point3 = new Point(0, 4);
        polygon = new Polygon([point1, point2, point3]);
    });

    it('should give distance', () => {
        expect(distance(point1, point2)).toBe(5);
    });

    it('should find point', () => {
        expect(findPointInPolygon(polygon.path, new Point(3.25, 4.3), 1)).toBe(point2);
    });

    it('should not find point', () => {
        expect(findPointInPolygon(polygon.path, new Point(5, 5), 1)).toBeUndefined();
    });

    it('should get perimeter', () => {
        expect(polygonPerimeter(polygon.path)).toBe(12);
    });

    it('should not modify original path changePointsOrder', () => {
        const rotatedPolygonFirstToLast = changePointsOrder(polygon.path, true);
        const rotatedPolygonLastToFirst = changePointsOrder(polygon.path, false);

        expect(rotatedPolygonFirstToLast).not.toBe(polygon.path);
        expect(rotatedPolygonLastToFirst).not.toBe(polygon.path);

        expect(rotatedPolygonFirstToLast).toEqual([point2, point3, point1]);
        expect(rotatedPolygonLastToFirst).toEqual([point3, point1, point2]);
    });

    it('should return exact value', () => {
        cases.forEach(value => {
            expect(polygonArea(value.polygon.path, value.polygonsToCut.map(polygonItem => polygonItem.path))).toBe(
                value.expectedValue,
                value.name + ' failed',
            );
        });
    });
});
