import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Point } from 'src/app/point/models/point';
import { EditPointModalComponent } from './edit-point-modal.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EditPointModalService {
  constructor(private readonly dialog: MatDialog) { }

  modifyPoint(point: Point, title?: string): Observable<Point> {
    const dialogRef = this.dialog.open(EditPointModalComponent, {
      width: '300px',
      data: {
        point,
        title
      },
    });

    return dialogRef.afterClosed();
  }
}
