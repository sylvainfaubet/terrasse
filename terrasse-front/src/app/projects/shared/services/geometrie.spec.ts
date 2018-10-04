import { distance, findPointInPolygon, perimetrePolygone, airePolygone } from './geometrie';
import { Point } from '../model/point';

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
        expect(perimetrePolygone(path)).toBe(12);
    });

    it('should get area', () => {
        expect(airePolygone(path)).toBe(6);
    });
});
