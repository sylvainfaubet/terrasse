import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'terrasse-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    public isDisplayedKito = new Date().toDateString() === new Date('2018-10-17').toDateString();

    constructor() {}

    public ngOnInit() {}
}
