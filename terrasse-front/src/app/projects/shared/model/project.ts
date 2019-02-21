import { Draw } from './draw';
import { Zone } from './zone';

export class Project {
    constructor(public id: Number, public draws: Array<Draw> = [], public zone: Zone = new Zone(20, 15), public name?: String) {}
}
