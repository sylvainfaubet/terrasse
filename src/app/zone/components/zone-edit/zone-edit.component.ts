import { Component, Input } from '@angular/core';
import { Zone } from '../../models';

@Component({
  selector: 'terrasse-zone-edit',
  templateUrl: './zone-edit.component.html',
  styleUrls: ['./zone-edit.component.scss']
})
export class ZoneEditComponent {

  @Input() zone: Zone;


}
