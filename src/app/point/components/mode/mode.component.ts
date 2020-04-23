import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mode } from './mode.model';

@Component({
  selector: 'terrasse-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent implements OnInit {
  modeEnum = Mode;

  modeValue: Mode;

  @Output() modeChange = new EventEmitter<Mode>();

  @Input()
  get mode() {
    return this.modeValue;
  }
  set mode(val) {
    this.modeValue = val;
    this.modeChange.emit(this.modeValue);
  }




}
