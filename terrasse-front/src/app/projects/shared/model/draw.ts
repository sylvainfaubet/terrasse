import { Polygon } from '../../../geometry/geometry.module';
import { DrawType } from './drawType';
import { Structure } from './structure';

export class Draw {
    constructor(
        public type: DrawType,
        public polygon: Polygon = new Polygon(),
        public structure: Structure = new Structure(),
        public name?: String,
    ) {}
}
