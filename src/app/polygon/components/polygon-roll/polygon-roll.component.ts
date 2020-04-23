import { Component, OnInit, Input } from '@angular/core';
import { Polygon } from '../../models';

@Component({
  selector: 'terrasse-polygon-roll',
  templateUrl: './polygon-roll.component.html',
  styleUrls: ['./polygon-roll.component.scss']
})
export class PolygonRollComponent implements OnInit {

  @Input() polygon: Polygon;





  isNotChangeable() {
    return this.polygon && this.polygon.path.length < 3;
  }
}
