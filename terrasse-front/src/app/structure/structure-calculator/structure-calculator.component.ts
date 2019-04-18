import { Component, OnInit, Input } from '@angular/core';
import { Draw } from 'src/app/draw/draw';
import { DrawService } from 'src/app/draw/draw.service';
import { formatNumber } from '@angular/common';

@Component({
    selector: 'terrasse-structure-calculator',
    templateUrl: './structure-calculator.component.html',
    styleUrls: ['./structure-calculator.component.scss'],
})
export class StructureCalculatorComponent implements OnInit {
    @Input()
    draw: Draw;

    constructor(private readonly drawService: DrawService) {}

    ngOnInit() {}

    getStructureInfo() {
        if (this.draw.polygon.path.length > 2) {
            const result = this.drawService.drawStructureGetInfos(this.draw);
            return formatNumber(result.nbBottomLines, 'fr-Fr', '1.0-0') + ' ' + formatNumber(result.nbTopLines, 'fr-Fr', '1.0-0');
        }
    }

    structureSetBestAngle() {
        this.drawService.drawStructureSetBestAngle(this.draw);
    }
    structureAlign() {
        this.drawService.drawStructureSetAlignToLastEdge(this.draw);
    }
}
