import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fireworks from 'fireworks';

@Component({
    selector: 'terrasse-birthday',
    templateUrl: './birthday.component.html',
    styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit, OnDestroy {
    interval;
    date;

    ngOnInit() {
        this.interval = setInterval(this.boom, 1500);
        this.date = new Date('2018-10-17').toDateString();
    }

    ngOnDestroy() {
        this.stop();
    }

    boom() {
        fireworks({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            colors: ['#cc3333', '#4CAF50', '#81C784'],
        });
    }

    stop() {
        clearInterval(this.interval);
    }
}
