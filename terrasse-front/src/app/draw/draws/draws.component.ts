import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Draw } from '../draw';
import { DrawType } from '../draw.type';
import { Polygon } from 'src/app/polygon/polygon';
import { Point } from 'src/app/point/point';
import { EditPointModalService } from 'src/app/point/edit-point-modal/edit-point-modal.service';

@Component({
    selector: 'terrasse-draws',
    templateUrl: './draws.component.html',
    styleUrls: ['./draws.component.scss'],
})
export class DrawsComponent implements OnInit {
    @Input()
    draws: Draw[];

    currentDrawIndex: number;

    selectedDrawType = DrawType.Piscine;

    @Input()
    get currentDraw() {
        return this.draws[this.currentDrawIndex];
    }
    set currentDraw(draw: Draw) {
        const drawIndex = this.draws.findIndex(drawItem => drawItem === draw);
        this.setCurrentDrawIndex(drawIndex > 0 ? drawIndex : 0);
    }

    @Output()
    currentDrawChange = new EventEmitter<Draw>();

    constructor(private readonly editPointModalService: EditPointModalService) {}

    ngOnInit() {
        console.log('DrawsComponent', this.draws);
        this.setCurrentDrawIndex(0);
    }

    newDraw(type: DrawType) {
        console.log(type);
        const draw = new Draw(type);
        this.draws.push(draw);
        this.setCurrentDrawIndex(this.draws.length - 1);
    }

    setCurrentDrawIndex(index: number) {
        this.currentDrawIndex = index;
        console.log('setCurrentDrawIndex', this.draws[index]);
        this.currentDrawChange.emit(this.draws[index]);
    }

    changeCurrentDraw() {
        this.setCurrentDrawIndex((this.currentDrawIndex + 1) % this.draws.length);
    }

    removeDraw(draw: Draw) {
        if (this.draws.length > 1) {
            if (this.currentDraw === draw) {
                this.setCurrentDrawIndex(0);
            }
            this.draws.splice(this.draws.indexOf(draw), 1);
        } else {
            alert('on ne peut pas supprimer le dernier dessin sans en créer un autre');
        }
    }

    changeDrawFirstElement(draw: Draw) {
        if (draw) {
            draw.polygon.rollFirstToLast();
        }
    }

    reverseDraw(draw: Draw) {
        if (draw) {
            draw.polygon.path.reverse();
        }
    }

    isNotChangeable(draw: Draw) {
        return draw && draw.polygon.path.length < 3;
    }

    isOnlyOneDraw() {
        return this.draws && this.draws.length === 1;
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
