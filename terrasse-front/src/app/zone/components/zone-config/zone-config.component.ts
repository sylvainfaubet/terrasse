import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../../models';

@Component({
  selector: 'terrasse-zone-config',
  templateUrl: './zone-config.component.html',
  styleUrls: ['./zone-config.component.scss']
})
export class ZoneConfigComponent implements OnInit {

  @Input()
  zone: Zone;

  constructor() { }

  ngOnInit() {
  }

}
