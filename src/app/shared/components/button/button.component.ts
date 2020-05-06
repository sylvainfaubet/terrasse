import { Component, Input } from '@angular/core';

@Component({
  selector: 'terrasse-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() icon: string;
  @Input() color = 'primary';
  @Input() disabled: boolean;

}
