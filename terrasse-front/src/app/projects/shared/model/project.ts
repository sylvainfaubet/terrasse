import { Draw } from './draw';
import { Zone } from './zone';
import { DrawType } from './drawType';

export class Project {
    constructor(public id: Number, public draws: Array<Draw> = [], public zone: Zone = new Zone(20, 15), public name?: String) { }

    setFromJSON(data) {
        this.name = data.name;
        if (data.zone) {
            this.zone.setFromJSON(data.zone);
        }
        if (data.draws && Array.isArray(data.draws)) {
            this.draws = data.draws.map(draw => {
                const drawResult = new Draw(DrawType.Terrasse);
                drawResult.setFromJSON(draw);
                return drawResult;
            });
        }
    }
}
