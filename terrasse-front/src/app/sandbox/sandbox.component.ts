import { Component, OnInit } from '@angular/core';
import { Point } from '../projects/shared/point';

@Component({
    selector: 'terrasse-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit {
    data = new Point(1, 3);

    constructor() {}

    ngOnInit() {}

    test() {
        console.log(this);
    }
}
