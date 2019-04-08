import { Component, OnInit } from '@angular/core';
import { DrawType } from '../draw.type';

@Component({
  selector: 'terrasse-draw-type-selector',
  templateUrl: './draw-type-selector.component.html',
  styleUrls: ['./draw-type-selector.component.scss']
})
export class DrawTypeSelectorComponent implements OnInit {

    drawTypes = [DrawType.Piscine, DrawType.Terrasse]

  constructor() { }

  ngOnInit() {
  }

}
