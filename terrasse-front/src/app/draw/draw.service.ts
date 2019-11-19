import { Injectable } from "@angular/core";
import { Draw } from "./models/draw";
import { PolygonService } from "../polygon/polygon.service";
import { Polygon } from "../polygon/polygon";
import { Point } from "../point/point";

@Injectable({
    providedIn: "root",
})
export class DrawService {
    constructor(private readonly polygonService: PolygonService) { }

    drawStructureSetBestAngle(draw: Draw) {
        draw.structure.angle = this.polygonService.getBestPolygonAngle(draw.polygon);
    }

    drawStructureSetAlignToLastEdge(draw: Draw) {
        const length = draw.polygon.path.length;
        if (length > 2) {
            draw.structure.angle = draw.polygon.path[0].angleWith(draw.polygon.path[length - 1]);
        }
    }

    drawStructureGetInfos(draw: Draw) {
        const poly = new Polygon().setFromJSON(JSON.parse(JSON.stringify(draw.polygon)));
        poly.rotate(new Point(0, 0), draw.structure.angle);
        const rect = this.polygonService.getMinMaxRect(poly);
        console.log("drawStructureGetInfos", rect, poly, draw);
        return {
            nbTopLines: Math.round((rect.maxX - rect.minX) / draw.structure.topSpace + draw.structure.offset.x),
            nbBottomLines: Math.round((rect.maxY - rect.minY) / draw.structure.bottomSpace + draw.structure.offset.y),
        };
    }
}
