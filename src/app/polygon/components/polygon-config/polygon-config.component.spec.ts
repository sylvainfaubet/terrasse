import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonConfigComponent } from './polygon-config.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PolygonConfigComponent', () => {
  let component: PolygonConfigComponent;
  let fixture: ComponentFixture<PolygonConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolygonConfigComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
