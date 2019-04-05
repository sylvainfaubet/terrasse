import { Draw } from 'src/app/draw/draw';
import { DrawType } from 'src/app/draw/draw.type';
import { Zone } from 'src/app/zone/zone';

export class Project {
    constructor(public id: number, public draws: Array<Draw> = [], public zone: Zone = new Zone(), public name?: string) { }

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
