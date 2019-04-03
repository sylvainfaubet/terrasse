import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Structure } from '../structure';

@Component({
    selector: 'terrasse-structure-config',
    templateUrl: './structure-config.component.html',
    styleUrls: ['./structure-config.component.scss']
})
export class StructureConfigComponent implements OnInit {

    @Input()
    structure: Structure;
    @Output()
    currentDrawChange = new EventEmitter();

    constructor() { }

    ngOnInit() {
        console.log(this.structure);
    }

}
