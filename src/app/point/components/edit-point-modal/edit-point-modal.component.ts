import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Point } from 'src/app/point/models/point';

@Component({
  selector: 'terrasse-edit-point-modal',
  templateUrl: './edit-point-modal.component.html',
  styleUrls: ['./edit-point-modal.component.scss']
})
export class EditPointModalComponent {
  title = 'édition du point sélectionné';
  point: Point;

  constructor(
    public dialogRef: MatDialogRef<EditPointModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: { point: Point, title: string }
  ) {
    if (!!data.point) {
      this.point = data.point;
    }
    if (!!data.title) {
      this.title = data.title;
    }
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onNoClick();
    }
  }

  onNoClick(): void {
    this.dialogRef.close(this.point);
  }
}
