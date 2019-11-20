import { Point } from "../../point/models/point";

export class Structure {
    constructor(
        public bottomSpace: number = 0.8,
        public topSpace: number = 0.5,
        public angle: number = 0,
        public offset: Point = new Point(0.1, 0.1),
    ) { }

    setFromJSON(data) {
        if (data.bottomSpace) {
            this.bottomSpace = data.bottomSpace;
        }
        if (data.topSpace) {
            this.topSpace = data.topSpace;
        }
        if (data.angle) {
            this.angle = data.angle;
        }
        if (data.offset) {
            this.offset = new Point().setFromJSON(data.offset);
        }
        return this;
    }
}
