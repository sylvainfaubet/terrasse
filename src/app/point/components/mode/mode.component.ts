import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mode } from './mode.model';

@Component({
  selector: 'terrasse-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent {
  modeEnum = Mode;

  modeValue: Mode;

  @Output() modeChange = new EventEmitter<Mode>();

  @Input() get mode(): Mode {
    return this.modeValue;
  }

  set mode(val) {
    this.modeValue = val;
    this.modeChange.emit(this.modeValue);
  }

}
