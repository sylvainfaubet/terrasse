import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { routes } from './app-routing.module';

@Component({
    selector: 'terrasse-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public routes = routes;
    public title: String;

    constructor(@Inject(DOCUMENT) document: any) {
        this.title = document.title;
    }
}
