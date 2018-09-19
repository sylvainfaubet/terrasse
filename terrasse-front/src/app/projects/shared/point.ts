export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    roundPosition() {
        this.x = Math.round(this.x * 2) / 2;
        this.y = Math.round(this.y * 2) / 2;
    }
}
