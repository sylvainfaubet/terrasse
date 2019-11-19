import { Component, Input, OnInit } from "@angular/core";
import { Structure } from "../../models/structure";
import { EditPointModalService } from "src/app/point/edit-point-modal/edit-point-modal.service";

@Component({
    selector: "terrasse-structure-config",
    templateUrl: "./structure-config.component.html",
    styleUrls: ["./structure-config.component.scss"],
})
export class StructureConfigComponent implements OnInit {
    @Input() structure: Structure;

    constructor(private editPointModalService: EditPointModalService) { }

    ngOnInit() { }

    moveStructure() {
        this.editPointModalService.modifyPoint(this.structure.offset);
    }
}
