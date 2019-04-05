function roundValue(val: number, round: number) {
    return Math.round(val * round) / round;
}
export class Point {
    constructor(public x: number, public y: number) {}

    public roundPosition(round = 2) {
        this.x = roundValue(this.x, round);
        this.y = roundValue(this.y, round);
    }

    public distance(point: Point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }

    public toArray() {
        return [this.x, this.y];
    }
}
