import { Polygon } from './polygon';
import { Area } from './area';

export class Project {
    id: Number;
    area: Area;
    polygons: Array<Polygon>;

    constructor(id: Number, area: Area = new Area(), polygons: Array<Polygon> = []) {
        this.id = id;
        this.area = area;
        this.polygons = polygons;
    }
}
