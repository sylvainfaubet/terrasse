export class Zone {
    constructor(public width: number = 25, public height: number = 20) { }

    setFromJSON(data) {
        if (data.width) {
            this.width = data.width;
        }
        if (data.height) {
            this.height = data.height;
        }
    }
}
