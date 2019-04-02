import { Component, OnInit, Input } from '@angular/core';
import { NoProdCanLoad } from 'src/environments/noProd.canload';

@Component({
    selector: 'terrasse-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input()
    title: String;

    isSandboxAvailable:boolean = new NoProdCanLoad().canLoad();

    constructor() {}

    ngOnInit() {}
}
