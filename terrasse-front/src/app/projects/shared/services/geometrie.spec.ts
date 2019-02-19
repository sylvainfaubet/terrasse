import { distance, findPointInPolygon, polygonPerimeter, computeArea, changePointsOrder, polygonArea } from './geometrie';
import { Point } from '../model';
import { cases } from './test_cases';

const path: Array<Point> = [{ x: 0, y: 0 }, { x: 3, y: 4 }, { x: 0, y: 4 }];

describe('geometrie', () => {
    it('should give distance', () => {
        expect(distance(path[0], path[1])).toBe(5);
    });

    it('should find point', () => {
        expect(findPointInPolygon(path, new Point(3.25, 4.3), 1)).toBe(path[1]);
    });

    it('should not find point', () => {
        expect(findPointInPolygon(path, new Point(5, 5), 1)).toBeUndefined();
    });

    it('should get perimeter', () => {
        expect(polygonPerimeter(path)).toBe(12);
    });

    it('should get area', () => {
        expect(computeArea(path)).toBe(6);
    });

    it('should not modify original path', () => {
        const testPath = [new Point(0, 0), new Point(1, 1), new Point(2, 2)];
        const rotatedPath = changePointsOrder(testPath, true);
        expect(rotatedPath).not.toBe(testPath);
    });

    it('should return exact value', () => {
        cases.forEach(value => {
            expect(polygonArea(value.polygon, value.polygonsToCut)).toBe(value.expectedValue, value.name + ' failed');
        });
    });
});
