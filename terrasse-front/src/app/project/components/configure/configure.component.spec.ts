import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { Draw } from "src/app/draw/models/draw";
import { DrawType } from "src/app/draw/models/draw.type";
import { MaterialModule } from "src/app/material/material.module";
import { Zone } from "src/app/zone/zone";
import { Project } from "../../models/project";
import { ConfigureComponent } from "./configure.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("ConfigureComponent", () => {
    let component: ConfigureComponent;
    let fixture: ComponentFixture<ConfigureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
            declarations: [ConfigureComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        data: of({
                            project: new Project(0, [new Draw(DrawType.Terrasse)], new Zone(10, 13)),
                            config: { terrasse: {} }
                        })
                    }
                },

                { provide: Router, useValue: {} }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigureComponent);
        component = fixture.componentInstance;
        component.currentDraw = component.project.draws[0];
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});