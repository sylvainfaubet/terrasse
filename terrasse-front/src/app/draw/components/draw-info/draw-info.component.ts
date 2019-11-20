import { Component, Input } from "@angular/core";
import { Draw } from "../../models/draw";
import { DrawType } from "../../models/draw.type";
import { DrawService } from "../../services/draw.service";
import { PolygonService } from "src/app/polygon/services/polygon.service";
import { Project } from "src/app/project/models/project";

@Component({
    selector: "terrasse-draw-info",
    templateUrl: "./draw-info.component.html",
    styleUrls: ["./draw-info.component.scss"],
})
export class DrawInfoComponent {
    @Input() draw: Draw;

    @Input() project: Project;

    structureLines;
    structurePilars = 0;
    fallingWood = 0;

    constructor(private readonly polygonService: PolygonService, private readonly drawService: DrawService) { }

    calcArea(): number {
        if (this.draw.type === DrawType.Piscine) {
            return this.draw.polygon.area();
        }

        const area = this.polygonService.polygonAreaWithoutCuts(
            this.draw.polygon,
            this.project.draws.filter(drawItem => drawItem.type === DrawType.Piscine).map(drawItem => drawItem.polygon),
        );
        this.structurePilars = Math.round(area * 1.06);
        this.fallingWood = area * 0.07;
        return area;
    }

    calcStructureLines() {
        if (this.draw.polygon.path.length > 2) {
            this.structureLines = this.drawService.drawStructureGetInfos(this.draw);
            return true;
        }
    }
}
