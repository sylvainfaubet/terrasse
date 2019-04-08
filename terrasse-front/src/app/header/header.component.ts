import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'terrasse-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input() public title: String;

    constructor() {}

    public ngOnInit() {}
}
