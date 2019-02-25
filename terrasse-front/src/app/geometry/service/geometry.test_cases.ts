import { Polygon, Point } from '../model';

const terrasse1 = new Polygon([new Point(2, 9), new Point(7, 9), new Point(7, 14), new Point(2, 14)]); // area 25
const piscine1 = new Polygon([new Point(3, 10), new Point(6, 10), new Point(6, 13), new Point(3, 13)]); // area 9

const terrasse2 = new Polygon([new Point(4, 2), new Point(9, 2), new Point(9, 7), new Point(4, 7)]); // area 25
const piscine2 = new Polygon([new Point(10, 3), new Point(10, 6), new Point(8, 6), new Point(8, 3)]); // area 6

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
        polygonsToCut: [piscine2],
    },
    {
        name: 'area of terrasse1 with pool inside',
        expectedValue: 16,
        polygon: terrasse1,
        polygonsToCut: [piscine1],
    },
    {
        name: 'area of terrasse2 with pool intersection',
        expectedValue: 22,
        polygon: terrasse2,
        polygonsToCut: [piscine2],
    },
];
