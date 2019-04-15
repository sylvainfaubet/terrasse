import { Component, OnInit, Input } from '@angular/core';
import { Polygon } from '../polygon';
import { Point } from 'src/app/point/point';
import { EditPointModalService } from 'src/app/point/edit-point-modal/edit-point-modal.service';
import { PolygonService } from '../polygon.service';

@Component({
    selector: 'terrasse-polygon-config',
    templateUrl: './polygon-config.component.html',
    styleUrls: ['./polygon-config.component.scss'],
})
export class PolygonConfigComponent implements OnInit {
    angle: number;
    center: Point;
    @Input()
    polygon: Polygon;

    constructor(private readonly editPointModalService: EditPointModalService, private readonly polygonService: PolygonService) {}

    ngOnInit() {}

    isNotChangeable() {
        return this.polygon && this.polygon.path.length < 3;
    }

    movePolygon() {
        const translate = new Point(0, 0);
        this.editPointModalService.modifyPoint(translate).subscribe(() => {
            this.polygon.move(translate);
        });
    }

    rotatePolygon() {
        this.center = this.polygonService.getCentroid(this.polygon);
        this.polygon.rotate(this.center, this.angle);
    }
}
