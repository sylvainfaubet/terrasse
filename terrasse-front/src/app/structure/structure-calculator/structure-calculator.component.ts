import { Component, OnInit, Input } from "@angular/core";
import { Draw } from "src/app/draw/models/draw";
import { DrawService } from "src/app/draw/draw.service";

@Component({
    selector: "terrasse-structure-calculator",
    templateUrl: "./structure-calculator.component.html",
    styleUrls: ["./structure-calculator.component.scss"],
})
export class StructureCalculatorComponent implements OnInit {
    @Input()
    draw: Draw;

    constructor(private readonly drawService: DrawService) { }

    ngOnInit() { }

    structureSetBestAngle() {
        this.drawService.drawStructureSetBestAngle(this.draw);
    }
    structureAlign() {
        this.drawService.drawStructureSetAlignToLastEdge(this.draw);
    }
}
