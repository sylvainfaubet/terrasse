import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { routes } from './app-routing.module';

@Component({
    selector: 'terrasse-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    routes = routes;
    title: String;

    constructor(@Inject(DOCUMENT) document: any) {
        this.title = document.title;
    }

    ngOnInit() {
        console.log(this);
    }
}
