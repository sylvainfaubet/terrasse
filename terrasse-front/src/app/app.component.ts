import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { routes } from './app-routing.module';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
} from '@angular/router';

@Component({
    selector: 'terrasse-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public routes = routes;
    public title: String;
    public loading = true;

    constructor(@Inject(DOCUMENT) document: any, router: Router) {
        this.title = document.title;
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.loading = true;
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel
            ) {
                this.loading = false;
            }
        });
    }
}
