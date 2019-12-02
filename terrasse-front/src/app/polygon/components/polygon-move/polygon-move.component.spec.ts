import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonMoveComponent } from './polygon-move.component';

describe('PolygonMoveComponent', () => {
  let component: PolygonMoveComponent;
  let fixture: ComponentFixture<PolygonMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
