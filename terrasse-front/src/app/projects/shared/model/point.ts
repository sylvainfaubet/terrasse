export class Point {
    constructor(public x: number, public y: number) {}

    roundPosition() {
        this.x = this.roundValue(this.x);
        this.y = this.roundValue(this.y);
    }

    private roundValue(val: number) {
        return Math.round(val * 2) / 2;
    }
}
