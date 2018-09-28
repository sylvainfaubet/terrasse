import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'terrasse-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input()
    title: String;

    constructor() {}

    ngOnInit() {}
}
