import { Component } from '@angular/core';

import { routes } from './app-routing.module';

@Component({
    selector: 'terrasse-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    routes = routes;
    title = 'Terrasse 2.0';
}
