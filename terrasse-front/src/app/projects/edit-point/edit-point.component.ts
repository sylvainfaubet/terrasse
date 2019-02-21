import './edit-point.component.scss';
import { Component, OnInit, Input } from '@angular/core';
import { Point } from '../../geometry/geometry.module';

@Component({
    selector: 'terrasse-edit-point',
    templateUrl: 'edit-point.component.html',
    styleUrls: ['edit-point.component.scss'],
})
export class EditPointComponent implements OnInit {
    @Input()
    point: Point;

    constructor() {}

    ngOnInit() {
        console.log(this);
    }
}
