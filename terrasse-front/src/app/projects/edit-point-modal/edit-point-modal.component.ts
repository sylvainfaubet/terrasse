import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Point } from 'src/app/geometry/model/point';

@Component({
    selector: 'terrasse-edit-point-modal',
    templateUrl: './edit-point-modal.component.html',
    styleUrls: ['./edit-point-modal.component.scss'],
})
export class EditPointModalComponent {
    constructor(public dialogRef: MatDialogRef<EditPointModalComponent>, @Inject(MAT_DIALOG_DATA) public point: Point) { }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.onNoClick();
        }
    }

    onNoClick(): void {
        this.dialogRef.close(this.point);
    }
}
