import { Component, Input } from '@angular/core';
import { PolygonService } from '../../services/polygon.service';
import { Polygon } from '../../models';

@Component({
  selector: 'terrasse-polygon-rotate',
  templateUrl: './polygon-rotate.component.html',
  styleUrls: ['./polygon-rotate.component.scss']
})
export class PolygonRotateComponent {

  @Input() angle = 10;
  @Input() polygon: Polygon;

  constructor(private readonly polygonService: PolygonService) { }

  rotatePolygon(isRotateLeft: boolean): void {
    const center = this.polygonService.getCentroid(this.polygon);
    this.polygon.rotate(center, (isRotateLeft ? -1 : 1) * this.angle);
  }

}
