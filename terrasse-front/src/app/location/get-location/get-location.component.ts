import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'terrasse-get-location',
    templateUrl: './get-location.component.html',
    styleUrls: ['./get-location.component.scss']
})
export class GetLocationComponent implements OnInit {

    label = 'récupérer la position';

    constructor() { }

    ngOnInit() {
    }



    onClick(event) {
        console.log('GetLocationComponent', 'onClick', event);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position);
            });
        } else {
            console.log('pas de position');
        }
    }

}
