import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'terrasse-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() placeholder: number;

  @Input() type = 'number';

  private _value: number;

  @Output() valueChange = new EventEmitter<number>();
  @Input()
  set value(value: number) {
    this._value = value;
    this.valueChange.emit(value);
  }

  get value(): number {
    return this._value;
  }

}
