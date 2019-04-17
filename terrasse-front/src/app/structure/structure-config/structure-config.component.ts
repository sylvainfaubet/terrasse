import { Component, Input, OnInit } from '@angular/core';
import { Structure } from '../structure';

@Component({
    selector: 'terrasse-structure-config',
    templateUrl: './structure-config.component.html',
    styleUrls: ['./structure-config.component.scss'],
})
export class StructureConfigComponent implements OnInit {
    @Input() structure: Structure;

    constructor() {}

    ngOnInit() {
        console.log(this.structure);
    }
}
