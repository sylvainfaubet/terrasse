import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Point } from 'src/app/point/point';
import { EditPointModalComponent } from './edit-point-modal.component';

@Injectable({
    providedIn: 'root'
})
export class EditPointModalService {
    constructor(private readonly dialog: MatDialog) {}

    modifyPoint(point: Point) {
        const dialogRef = this.dialog.open(EditPointModalComponent, {
            width: '300px',
            data: point
        });

        return dialogRef.afterClosed();
    }
}
