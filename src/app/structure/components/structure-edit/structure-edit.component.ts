import { Component, Input } from '@angular/core';
import { Draw } from 'src/app/draw/models/draw';

@Component({
  selector: 'terrasse-structure-edit',
  templateUrl: './structure-edit.component.html',
  styleUrls: ['./structure-edit.component.scss']
})
export class StructureEditComponent {

  @Input() draw: Draw;

}
