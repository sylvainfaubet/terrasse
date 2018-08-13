import { Component, OnInit, ElementRef } from '@angular/core';
import { Point } from '../shared/models/Points';

@Component({
	selector: 'terrasse-drawing-area',
	templateUrl: './drawing-area.component.html',
	styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent implements OnInit {
	maxPoint: Point;

	constructor(private el: ElementRef) {
		this.maxPoint = {
			x: el.nativeElement.parentElement.offsetWidth,
			y: el.nativeElement.parentElement.offsetHeight,
		};
	}

	ngOnInit() {
		console.log(this.el.nativeElement);
	}
}
