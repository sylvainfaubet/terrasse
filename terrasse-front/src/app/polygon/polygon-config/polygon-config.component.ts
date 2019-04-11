import { Component, OnInit, Input } from '@angular/core';
import { Polygon } from '../polygon';
import { Point } from 'src/app/point/point';
import { EditPointModalService } from 'src/app/point/edit-point-modal/edit-point-modal.service';

@Component({
    selector: 'terrasse-polygon-config',
    templateUrl: './polygon-config.component.html',
    styleUrls: ['./polygon-config.component.scss'],
})
export class PolygonConfigComponent implements OnInit {
    @Input()
    polygon: Polygon;

    constructor(private readonly editPointModalService: EditPointModalService) {}

    ngOnInit() {}

    isNotChangeable(polygon: Polygon) {
        return polygon && polygon.path.length < 3;
    }

    movePolygon(polygon: Polygon) {
        if (polygon) {
            const translate = new Point(0, 0);
            this.editPointModalService.modifyPoint(translate).subscribe(() => {
                polygon.move(translate);
            });
        }
    }
}
