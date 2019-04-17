import { Component, OnInit, Input } from '@angular/core';
import { PolygonService } from 'src/app/polygon/polygon.service';
import { Draw } from 'src/app/draw/draw';

@Component({
    selector: 'terrasse-structure-calculator',
    templateUrl: './structure-calculator.component.html',
    styleUrls: ['./structure-calculator.component.scss'],
})
export class StructureCalculatorComponent implements OnInit {
    @Input()
    draw: Draw;

    constructor(private readonly polygonService: PolygonService) {}

    ngOnInit() {}

    structureSetBestAngle() {
        this.draw.structure.angle = this.polygonService.getBestPolygonAngle(this.draw.polygon);
    }
    structureAlign() {
        const length = this.draw.polygon.path.length;
        if (length > 2) {
            this.draw.structure.angle = this.draw.polygon.path[0].angleWith(this.draw.polygon.path[length - 1]);
        }
    }
}
