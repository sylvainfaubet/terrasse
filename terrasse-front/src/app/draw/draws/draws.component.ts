import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Draw } from "../models/draw";
import { DrawType } from "../models/draw.type";

@Component({
    selector: "terrasse-draws",
    templateUrl: "./draws.component.html",
    styleUrls: ["./draws.component.scss"],
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

    ngOnInit() {
        console.log("DrawsComponent", this.draws);
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
        console.log("setCurrentDrawIndex", this.draws[index]);
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
            alert("on ne peut pas supprimer le dernier dessin sans en créer un autre");
        }
    }

    isOnlyOneDraw() {
        return this.draws && this.draws.length === 1;
    }
}
