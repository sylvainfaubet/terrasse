import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'terrasse-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() color: string = "primary";
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
