import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonRollComponent } from './polygon-roll.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PolygonRollComponent', () => {
  let component: PolygonRollComponent;
  let fixture: ComponentFixture<PolygonRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolygonRollComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
