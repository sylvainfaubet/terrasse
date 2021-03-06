import { Polygon } from 'src/app/polygon/models/polygon';
import { Structure } from 'src/app/structure/models/structure';
import { DrawType } from './draw.type';

export class Draw {
  constructor(
    public type: DrawType,
    public polygon: Polygon = new Polygon(),
    public structure: Structure = new Structure(),
    public name?: string
  ) { }

  setFromJSON(data): void {
    switch (data.type) {
      case DrawType.Terrasse:
        this.type = DrawType.Terrasse;
        break;
      case DrawType.Piscine:
        this.type = DrawType.Piscine;
        break;
      default:
        this.type = DrawType.Terrasse;
    }
    if (data.structure) {
      this.structure.setFromJSON(data.structure);
    }
    this.name = data.name;
    if (data.polygon) {
      this.polygon.setFromJSON(data.polygon);
    }
  }
}
