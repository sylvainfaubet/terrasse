function roundValue(val: number) {
    return Math.round(val * 2) / 2;
}
export class Point {
    constructor(public x: number, public y: number) {}

    static roundPosition(point: Point) {
        point.x = roundValue(point.x);
        point.y = roundValue(point.y);
    }

    toArray() {
        return [this.x, this.y];
    }
}
