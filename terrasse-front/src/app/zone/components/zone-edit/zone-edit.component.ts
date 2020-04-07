import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../../models';

@Component({
  selector: 'terrasse-zone-edit',
  templateUrl: './zone-edit.component.html',
  styleUrls: ['./zone-edit.component.scss']
})
export class ZoneEditComponent implements OnInit {

  @Input() zone: Zone;

  constructor() { }

  ngOnInit() {
  }

}
