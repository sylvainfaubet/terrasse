import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DrawType } from '../../models/draw.type';

@Component({
  selector: 'terrasse-draw-type-selector',
  templateUrl: './draw-type-selector.component.html',
  styleUrls: ['./draw-type-selector.component.scss'],
})
export class DrawTypeSelectorComponent {
  drawTypes = [DrawType.Piscine, DrawType.Terrasse];

  @Output() typeChange = new EventEmitter<DrawType>();

  @Input()
  type: DrawType;

}
