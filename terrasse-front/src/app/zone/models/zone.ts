export class Zone {
    constructor(public width = 25, public height = 20) { }

    setFromJSON(data) {
        if (data.width) {
            this.width = data.width;
        }
        if (data.height) {
            this.height = data.height;
        }
    }
}
