import { Polygon } from './polygon';
import { Area } from './area';

export class Project {
    constructor(public id: Number, public polygons: Array<Polygon> = [], public area: Area = new Area(),public name?: String) {}
}
