import { Component, Input } from '@angular/core';
import { Polygon } from '../../models/polygon';
import { PolygonService } from '../../services/polygon.service';
import { Point } from 'src/app/point/models/point';

@Component({
  selector: 'terrasse-polygon-info',
  templateUrl: './polygon-info.component.html',
  styleUrls: ['./polygon-info.component.scss'],
})
export class PolygonInfoComponent {
  @Input() polygon: Polygon;

  constructor(private polygonService: PolygonService) { }

  getCentroid(): Point {
    return this.polygonService.getCentroid(this.polygon);
  }
}
