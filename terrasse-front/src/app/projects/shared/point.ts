export class Point {
    constructor(public x: number, public y: number) {}

    roundPosition() {
        this.x = Math.round(this.x * 2) / 2;
        this.y = Math.round(this.y * 2) / 2;
    }
}
