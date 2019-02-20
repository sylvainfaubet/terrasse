import { Polygon, PolygonType, Point, Structure } from '../model';

const piscine1 = new Polygon(
    PolygonType.Piscine,
    [new Point(10, 3), new Point(10, 6), new Point(8, 6), new Point(8, 3)],
    new Structure(),
    'piscine1',
); // area 6

const piscine2 = new Polygon(
    PolygonType.Piscine,
    [new Point(3, 10), new Point(6, 10), new Point(6, 13), new Point(3, 13)],
    new Structure(),
    'piscine2',
); // area 9

const terrasse1 = new Polygon(
    PolygonType.Terrasse,
    [new Point(2, 9), new Point(7, 9), new Point(7, 14), new Point(2, 14)],
    new Structure(),
    'terrasse1',
); // area 25

const terrasse2 = new Polygon(
    PolygonType.Terrasse,
    [new Point(4, 2), new Point(9, 2), new Point(9, 7), new Point(4, 7)],
    new Structure(),
    'terrasse2',
); // area 25

export const cases = [
    {
        name: 'area of terrasse1 without pool to cut',
        expectedValue: 25,
        polygon: terrasse1,
        polygonsToCut: [],
    },
    {
        name: 'area of terrasse1 with pool with no intersection',
        expectedValue: 25,
        polygon: terrasse1,
        polygonsToCut: [piscine1],
    },
    {
        name: 'area of terrasse1 with pool with intersection',
        expectedValue: 16,
        polygon: terrasse1,
        polygonsToCut: [piscine2],
    },
    {
        name: 'area of terrasse2 with pool intersection',
        expectedValue: 22,
        polygon: terrasse2,
        polygonsToCut: [piscine1],
    },
];