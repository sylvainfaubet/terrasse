import { Point } from '../../point/models/point';

export class Polygon {
  constructor(public path: Point[] = [], public isNotClosed: boolean = false) { }

  public area(isSigned = false) {
    let aire = 0;
    for (let i = 0; i < this.path.length; i++) {
      const pi = this.path[i];
      const pi1 = this.path[(i + 1) % this.path.length];
      aire += (pi.x + pi1.x) * (pi1.y - pi.y);
    }
    aire = aire / 2;
    return aire > 0 ? aire : isSigned ? aire : -aire;
  }

  public perimeter() {
    let perimeter = 0;

    this.path.forEach((point: Point, index: number, array: Point[]) => {
      if (index + 1 < array.length) {
        perimeter += point.distance(array[index + 1]);
      } else if (!this.isNotClosed && array.length === index + 1) {
        perimeter += point.distance(array[0]);
      }
    });
    return perimeter;
  }

  public getPointNextTo(point: Point, maxDistance: number) {
    return this.path
      .filter((pointItem: Point) => pointItem.distance(point) < maxDistance)
      .sort((p1, p2) => p1.distance(point) - p2.distance(point))
      .shift();
  }

  public getSvgPath() {
    return this.path.map(point => (point.x || 0) + ',' + (point.y || 0)).join(' ');
  }

  public addPoint(point: Point) {
    this.path.push(point);
  }

  public removePoint(point: Point) {
    this.path.splice(this.path.indexOf(point), 1);
  }

  public rollFirstToLast() {
    this.path.push(this.path.shift());
  }

  public setFromJSON(data) {
    if (data.isNotClosed !== undefined) {
      this.isNotClosed = data.isNotClosed;
    }
    if (Array.isArray(data.path)) {
      this.path = data.path.map(point => new Point(point.x, point.y));
    }
    return this;
  }

  public move(translate: Point) {
    this.path.forEach(point => {
      point.x += translate.x;
      point.y += translate.y;
    });
  }
  public rotate(center: Point, angle: number) {
    this.path.forEach(point => {
      point.rotate(center, angle);
    });
  }
}
