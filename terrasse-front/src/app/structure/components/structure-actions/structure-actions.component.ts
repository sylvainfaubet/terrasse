import { Component, OnInit, Input } from '@angular/core';
import { DrawService } from 'src/app/draw/services/draw.service';
import { Draw } from 'src/app/draw/models/draw';

@Component({
  selector: 'terrasse-structure-actions',
  templateUrl: './structure-actions.component.html',
  styleUrls: ['./structure-actions.component.scss']
})
export class StructureActionsComponent implements OnInit {
  @Input() draw: Draw;

  constructor(private readonly drawService: DrawService) { }

  ngOnInit() {
  }



  structureSetBestAngle() {
    this.drawService.drawStructureSetBestAngle(this.draw);
  }

  structureAlign() {
    this.drawService.drawStructureSetAlignToLastEdge(this.draw);
  }
}
