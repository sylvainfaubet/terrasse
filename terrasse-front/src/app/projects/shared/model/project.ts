import { Zone } from './zone';
import { Draw } from 'src/app/draw/draw';
import { DrawType } from 'src/app/draw/draw.type';



export class Project {
    constructor(public id: number, public draws: Draw[] = [], public zone: Zone = new Zone(), public name?: string) { }

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
