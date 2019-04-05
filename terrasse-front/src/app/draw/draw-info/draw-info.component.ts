import { Component, Input } from '@angular/core';
import { PolygonService } from 'src/app/polygon/polygon.service';
import { Project } from 'src/app/project/project';
import { Draw } from '../draw';
import { DrawType } from '../draw.type';

@Component({
  selector: 'terrasse-draw-info',
  templateUrl: './draw-info.component.html',
  styleUrls: ['./draw-info.component.scss']
})
export class DrawInfoComponent  {

    @Input() draw: Draw;

    @Input() project: Project;

    constructor(private readonly polygonService: PolygonService) { }

    calcArea(): number {
        if (this.draw.type === DrawType.Piscine) {
            return this.draw.polygon.area();
        }

        return this.polygonService.polygonAreaWithoutCuts(this.draw.polygon,
            this.project.draws.filter(drawItem => drawItem.type === DrawType.Piscine).map(drawItem => drawItem.polygon)
        );
    }

}
