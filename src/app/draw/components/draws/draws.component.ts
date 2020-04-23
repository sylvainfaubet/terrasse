import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Draw } from '../../models/draw';
import { DrawType } from '../../models/draw.type';

@Component({
  selector: 'terrasse-draws',
  templateUrl: './draws.component.html',
  styleUrls: ['./draws.component.scss'],
})
export class DrawsComponent implements OnInit {
  @Input()
  draws: Draw[];

  private _currentDrawIndex = 0;

  set currentDrawIndex(index: number) {
    this._currentDrawIndex = index;
    this.currentDrawChange.emit(this.currentDraw);
  }

  selectedDrawType = DrawType.Piscine;

  get currentDraw(): Draw {
    return this.draws[this._currentDrawIndex];
  }

  @Output()
  currentDrawChange = new EventEmitter<Draw>();

  ngOnInit(): void {
    if (this.draws && this.draws.length === 0) {
      this.newDraw();
    }
  }

  newDraw(): void {
    const draw = new Draw(this.selectedDrawType);
    this.draws.push(draw);
    this.currentDrawIndex = this.draws.length - 1;
  }

  roundCurrentDraw(): void {
    this.currentDrawIndex = (this._currentDrawIndex + 1) % this.draws.length;
  }

  removeDraw(): void {
    if (this.draws.length > 1) {
      this.draws.splice(this._currentDrawIndex, 1);
      this.roundCurrentDraw();
    } else {
      alert('on ne peut pas supprimer le dernier dessin sans en créer un autre');
    }
  }

  get isOnlyOneDraw(): boolean {
    return this.draws && this.draws.length === 1;
  }
}
