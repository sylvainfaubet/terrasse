import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/geometry/point.model';

@Component({
    selector: 'terrasse-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit {
    data = new Point(1, 3);

    constructor() { }

    ngOnInit() { }
}
