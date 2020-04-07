import { Component, OnInit, Input } from '@angular/core';
import { Draw } from 'src/app/draw/models/draw';

@Component({
  selector: 'terrasse-structure-edit',
  templateUrl: './structure-edit.component.html',
  styleUrls: ['./structure-edit.component.scss']
})
export class StructureEditComponent implements OnInit {

  @Input() draw: Draw;

  constructor() { }

  ngOnInit() {
  }

}
