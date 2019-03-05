export class Structure {
    constructor(public bottomSpace: Number = 0.8, public topSpace: Number = 0.5, public angle: Number = 0) { }
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
    }
}
