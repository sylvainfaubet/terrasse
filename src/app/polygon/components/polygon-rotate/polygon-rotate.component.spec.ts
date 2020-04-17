import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonRotateComponent } from './polygon-rotate.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PolygonRotateComponent', () => {
  let component: PolygonRotateComponent;
  let fixture: ComponentFixture<PolygonRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolygonRotateComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
