import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PolygonConfigComponent } from "./polygon-config.component";
import { MaterialModule } from "src/app/material/material.module";

describe("PolygonConfigComponent", () => {
    let component: PolygonConfigComponent;
    let fixture: ComponentFixture<PolygonConfigComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PolygonConfigComponent],
            imports: [MaterialModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PolygonConfigComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
