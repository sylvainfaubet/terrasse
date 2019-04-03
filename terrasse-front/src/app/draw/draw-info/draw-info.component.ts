import { Component, OnInit, Input } from '@angular/core';
import { Draw } from '../draw';
import { DrawType } from '../draw.type';
import { Project } from 'src/app/project/project';
import { PolygonService } from 'src/app/polygon/polygon.service';

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

    constructor(private polygonService:PolygonService) { }

    ngOnInit() {}

    calcArea() {
        if (this.draw.type === DrawType.Piscine) {
            return this.draw.polygon.area();
        }
        return this.polygonService.polygonAreaWithoutCuts(this.draw.polygon,
            this.project.draws.filter(drawItem => drawItem.type === DrawType.Piscine).map(drawItem => drawItem.polygon),
        );
    }

}
