import { Polygon } from './polygon';
import { Area } from './area';

export class Project {
    constructor(public id: Number, public name?: String, public area: Area = new Area(), public polygons: Array<Polygon> = []) {}
}
