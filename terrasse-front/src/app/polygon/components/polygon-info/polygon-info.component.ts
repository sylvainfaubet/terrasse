import { Component, OnInit, Input } from "@angular/core";
import { Polygon } from "../../models/polygon";
import { PolygonService } from "../../services/polygon.service";

@Component({
    selector: "terrasse-polygon-info",
    templateUrl: "./polygon-info.component.html",
    styleUrls: ["./polygon-info.component.scss"],
})
export class PolygonInfoComponent implements OnInit {
    @Input() polygon: Polygon;

    constructor(private polygonService: PolygonService) { }

    ngOnInit() { }

    getCentroid() {

        return this.polygonService.getCentroid(this.polygon);
    }
}