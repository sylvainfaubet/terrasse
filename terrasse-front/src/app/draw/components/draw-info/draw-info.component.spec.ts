import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PolygonService } from "src/app/polygon/services/polygon.service";
import { Draw } from "../../models/draw";
import { DrawType } from "../../models/draw.type";
import { DrawInfoComponent } from "./draw-info.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

class MockService { }

describe("DrawInfoComponent", () => {
    let component: DrawInfoComponent;
    let fixture: ComponentFixture<DrawInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DrawInfoComponent],
            providers: [{ provide: PolygonService, useClass: MockService }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DrawInfoComponent);
        component = fixture.componentInstance;
        component.draw = new Draw(DrawType.Piscine);
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
