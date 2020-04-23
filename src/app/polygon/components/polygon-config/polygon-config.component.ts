import { Component, Input } from '@angular/core';
import { Polygon } from '../../models/polygon';
@Component({
  selector: 'terrasse-polygon-config',
  templateUrl: './polygon-config.component.html',
  styleUrls: ['./polygon-config.component.scss'],
})
export class PolygonConfigComponent {

  @Input() polygon: Polygon;

}
