import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

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
  public title: string;
  public loaded = false;

  constructor(@Inject(DOCUMENT) document: Document, router: Router) {
    this.title = document.title;
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaded = false;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loaded = true;
      }
    });
  }
}
