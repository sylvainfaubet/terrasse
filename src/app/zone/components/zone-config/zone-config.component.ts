import { Component, Input } from '@angular/core';
import { Zone } from '../../models';

@Component({
  selector: 'terrasse-zone-config',
  templateUrl: './zone-config.component.html',
  styleUrls: ['./zone-config.component.scss']
})
export class ZoneConfigComponent {

  @Input()
  zone: Zone;

}
