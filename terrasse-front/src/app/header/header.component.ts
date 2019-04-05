import { Component, Input, OnInit } from '@angular/core';
import { NoProdCanLoad } from 'src/environments/noProd.canload';

@Component({
    selector: 'terrasse-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input() public title: String;

    public isSandboxAvailable: boolean = new NoProdCanLoad().canLoad();

    constructor() {}

    public ngOnInit() {}
}
