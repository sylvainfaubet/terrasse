import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import localeFr from "@angular/common/locales/fr";
import localeFrExtra from "@angular/common/locales/extra/fr";

import { PolygonInfoComponent } from "./polygon-info.component";
import { Polygon } from "../../models/polygon";
import { registerLocaleData } from "@angular/common";

describe("PolygonInfoComponent", () => {
  let component: PolygonInfoComponent;
  let fixture: ComponentFixture<PolygonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolygonInfoComponent],
    }).compileComponents();
    registerLocaleData(localeFr, "fr-FR", localeFrExtra);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonInfoComponent);
    component = fixture.componentInstance;
    component.polygon = new Polygon();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
