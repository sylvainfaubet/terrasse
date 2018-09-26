import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'terrasse-edit-point-modal',
    templateUrl: './edit-point-modal.component.html',
    styleUrls: ['./edit-point-modal.component.scss'],
})
export class EditPointModalComponent {
    constructor(public dialogRef: MatDialogRef<EditPointModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
        this.dialogRef.close(this.data);
    }
}
