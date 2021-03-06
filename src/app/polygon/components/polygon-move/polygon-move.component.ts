import { Component, Input } from '@angular/core';
import { Point } from 'src/app/point/models';
import { EditPointModalService } from 'src/app/point/components/edit-point-modal/edit-point-modal.service';
import { Polygon } from '../../models';

@Component({
  selector: 'terrasse-polygon-move',
  templateUrl: './polygon-move.component.html',
  styleUrls: ['./polygon-move.component.scss']
})
export class PolygonMoveComponent {
  @Input() polygon: Polygon;

  constructor(private readonly editPointModalService: EditPointModalService) { }

  movePolygon(): void {
    const translate = new Point(0, 0);
    this.editPointModalService.modifyPoint(translate, 'Déplacement du dessin').subscribe(() => {
      this.polygon.move(translate);
    });
  }
}
