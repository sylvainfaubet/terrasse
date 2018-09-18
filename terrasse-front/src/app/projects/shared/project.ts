import { Polygon } from './polygon';

export class Project {
    id: Number;
    area: Object;
    polygons: Array<Polygon>;

    constructor(id: Number, area: Object = {}, polygons: Array<Polygon> = []) {
        this.id = id;
        this.area = area;
        this.polygons = polygons;
    }
}
