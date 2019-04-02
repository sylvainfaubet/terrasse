import { Component, OnInit, Input } from '@angular/core';
import { Draw } from '../draw';
import { DrawType } from '../draw.type';
import { Project } from 'src/app/projects/shared/model';

@Component({
  selector: 'terrasse-draw-info',
  templateUrl: './draw-info.component.html',
  styleUrls: ['./draw-info.component.scss']
})
export class DrawInfoComponent implements OnInit {

    @Input()
    draw:Draw

    @Input()
    project:Project;

    constructor() { }

    ngOnInit() {}

    calcArea(draw) {
        if (draw.type === DrawType.Piscine) {
            return draw.polygon.area();
        }
        return draw.polygon.areaWithoutPolygons(
            this.project.draws.filter(drawItem => drawItem.type === DrawType.Piscine).map(drawItem => drawItem.polygon),
        );
    }

}
