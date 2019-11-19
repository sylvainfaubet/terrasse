import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Draw } from "src/app/draw/models/draw";
import { DrawType } from "src/app/draw/models/draw.type";
import { EditPointModalService } from "src/app/point/edit-point-modal/edit-point-modal.service";
import { Mode } from "src/app/point/mode/mode.model";
import { Point } from "src/app/point/point";
import { Project } from "../../models/project";

@Component({
    selector: "terrasse-edit",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
    project: Project;
    config: any;

    currentDraw: Draw;
    mode: Mode = Mode.ADD;
    polygonTypes = DrawType;

    constructor(route: ActivatedRoute, private readonly editPointModalService: EditPointModalService) {
        route.data.subscribe(({ project, config }) => {
            this.project = project;
            this.currentDraw = this.project.draws[0];
            this.config = config;
        });
        this.doJobOnClickedPoint = this.doJobOnClickedPoint.bind(this);
    }

    ngOnInit() { }

    doJobOnClickedPoint(clickedPoint: Point) {
        const foundPoint = this.currentDraw.polygon.getPointNextTo(clickedPoint, 1);
        console.log("doJobOnClickedPoint", this.mode);
        switch (this.mode) {
            case Mode.ADD:
                this.currentDraw.polygon.addPoint(clickedPoint);
                break;
            case Mode.MODIFY:
                if (foundPoint) {
                    this.editPointModalService.modifyPoint(foundPoint);
                }
                break;
            case Mode.SUPPRESS:
                if (foundPoint) {
                    this.currentDraw.polygon.removePoint(foundPoint);
                }
                break;
            default:
        }
    }
}