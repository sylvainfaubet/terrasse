import { Component, OnInit } from '@angular/core';
import { Point } from '../projects/shared/point';
import { MatDialog } from '@angular/material';
import { EditPointModalComponent } from '../projects/edit-point-modal/edit-point-modal.component';

@Component({
    selector: 'terrasse-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit {
    data = new Point(1, 3);

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    test() {
        console.log(this);
        const dialogRef = this.dialog.open(EditPointModalComponent, {
            width: '250px',
            data: this.data,
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }
}
