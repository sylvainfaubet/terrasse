import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EditPointModalComponent } from './edit-point-modal.component';
import { Point } from 'src/app/geometry/model/point';

@Injectable({
    providedIn: 'root'
})
export class EditPointModalService {

    constructor(private dialog: MatDialog) { }

    modifyPoint(point: Point) {
        const dialogRef = this.dialog.open(EditPointModalComponent, {
            width: '300px',
            data: point,
        });
        return dialogRef.afterClosed();
    }
}
