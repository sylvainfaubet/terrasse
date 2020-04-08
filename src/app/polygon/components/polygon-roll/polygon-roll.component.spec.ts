import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonRollComponent } from './polygon-roll.component';

describe('PolygonRollComponent', () => {
  let component: PolygonRollComponent;
  let fixture: ComponentFixture<PolygonRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonRollComponent ]
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
