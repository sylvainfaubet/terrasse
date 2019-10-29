import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'terrasse-get-location',
    templateUrl: './get-location.component.html',
    styleUrls: ['./get-location.component.scss']
})
export class GetLocationComponent implements OnInit {

    label = 'récupérer la position';
    alertMessage: any;
    position: Position;

    constructor() {
        this.onClick = this.onClick.bind(this);
    }

    ngOnInit() {
    }



    onClick(event) {
        console.log('GetLocationComponent', 'onClick', event);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.position = position;
                console.log(position, this);
            }, error => {
                console.log(error);
            });
        } else {
            alert('vous n\'avez pas mis à disposition votre position');
        }
    }

    formatPosition(position: Position): any {
        return `
        ${position.coords.latitude} ${position.coords.longitude} (${position.coords.accuracy}m)
        ${position.coords.altitude ? position.coords.altitude : '' +
                (position.coords.altitudeAccuracy ? '(' + position.coords.altitudeAccuracy + ')' : '')}
        `;
    }

}
