import { formatNumber } from '@angular/common';

function roundValue(val: number, round: number): number {
  return Math.round(val * round) / round;
}

export class Point {
  constructor(public x: number = 0, public y: number = 0) { }

  public roundPosition(round = 2): void {
    this.x = roundValue(this.x, round);
    this.y = roundValue(this.y, round);
  }

  public distance(point: Point): number {
    return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
  }

  public toString(): string {
    return 'x : ' + formatNumber(this.x, 'fr-FR') + ', y : ' + formatNumber(this.y, 'fr-FR');
  }

  public toArray(): number[] {
    return [this.x, this.y];
  }

  public rotate(center: Point, angle: number): void {
    const sin = Math.sin(angle * (Math.PI / 180.0));
    const cos = Math.cos(angle * (Math.PI / 180.0));
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * cos + y * sin + center.x;
    this.y = -x * sin + y * cos + center.y;
  }

  public angleWith(point: Point): number {
    const opos = this.y - point.y;
    const adj = this.x - point.x;
    return Math.atan(opos / adj) * (180 / Math.PI);
  }

  public setFromJSON(data): Point {
    if (data.x) {
      this.x = data.x;
    }
    if (data.y) {
      this.y = data.y;
    }
    return this;
  }
}
