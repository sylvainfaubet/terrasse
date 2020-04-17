import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureMoveComponent } from './structure-move.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EditPointModalService } from 'src/app/point/components/edit-point-modal/edit-point-modal.service';

const editPointModalServiceMock = jest.fn(() => ({}));
describe('StructureMoveComponent', () => {
  let component: StructureMoveComponent;
  let fixture: ComponentFixture<StructureMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StructureMoveComponent],
      providers: [
        { provide: EditPointModalService, useValue: editPointModalServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
