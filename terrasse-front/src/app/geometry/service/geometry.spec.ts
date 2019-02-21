import { distance, findPointInPolygon, polygonPerimeter, computeArea, changePointsOrder, polygonArea } from './geometry.service';
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
        expect(findPointInPolygon(polygon, new Point(3.25, 4.3), 1)).toBe(point2);
    });

    it('should not find point', () => {
        expect(findPointInPolygon(polygon, new Point(5, 5), 1)).toBeUndefined();
    });

    it('should get perimeter', () => {
        expect(polygonPerimeter(polygon)).toBe(12);
    });

    it('should get area', () => {
        expect(computeArea(polygon)).toBe(6);
    });

    it('should not modify original path changePointsOrder', () => {
        const rotatedPolygonFirstToLast = changePointsOrder(polygon, true);
        const rotatedPolygonLastToFirst = changePointsOrder(polygon, false);

        expect(rotatedPolygonFirstToLast.path).not.toBe(polygon.path);
        expect(rotatedPolygonLastToFirst.path).not.toBe(polygon.path);

        expect(rotatedPolygonFirstToLast.path).toEqual([point2, point3, point1]);
        expect(rotatedPolygonLastToFirst.path).toEqual([point2, point3, point1]);

        expect(rotatedPolygonFirstToLast.isNotClosed).toBe(polygon.isNotClosed);
        expect(rotatedPolygonLastToFirst.isNotClosed).toBe(polygon.isNotClosed);
    });

    it('should return exact value', () => {
        cases.forEach(value => {
            expect(polygonArea(value.polygon, value.polygonsToCut)).toBe(value.expectedValue, value.name + ' failed');
        });
    });
});
