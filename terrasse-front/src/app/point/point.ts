function roundValue(val: number, round: number) {
    return Math.round(val * round) / round;
}
export class Point {
    constructor(public x: number, public y: number) {}

    roundPosition(round: number = 2) {
        this.x = roundValue(this.x, round);
        this.y = roundValue(this.y, round);
    }

    distance(point: Point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }

    toArray() {
        return [this.x, this.y];
    }
}
