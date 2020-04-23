import { Component, Input } from '@angular/core';
import { DrawService } from 'src/app/draw/services/draw.service';
import { Draw } from 'src/app/draw/models/draw';

@Component({
  selector: 'terrasse-structure-actions',
  templateUrl: './structure-actions.component.html',
  styleUrls: ['./structure-actions.component.scss']
})
export class StructureActionsComponent {
  @Input() draw: Draw;

  constructor(private readonly drawService: DrawService) { }

  structureSetBestAngle(): void {
    this.drawService.drawStructureSetBestAngle(this.draw);
  }

  structureAlign(): void {
    this.drawService.drawStructureSetAlignToLastEdge(this.draw);
  }
}
