import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonMoveComponent } from './polygon-move.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EditPointModalService } from 'src/app/point/components/edit-point-modal/edit-point-modal.service';
const editPointModalServiceMock = jest.fn(() => ({}));
describe('PolygonMoveComponent', () => {
  let component: PolygonMoveComponent;
  let fixture: ComponentFixture<PolygonMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolygonMoveComponent],
      providers: [{ provide: EditPointModalService, useValue: editPointModalServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
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
