export class Zone {
    constructor(public width: number, public height: number) { }
    setFromJSON(data) {
        if (data.width) {
            this.width = data.width;
        }
        if (data.height) {
            this.height = data.height;
        }
    }
}
