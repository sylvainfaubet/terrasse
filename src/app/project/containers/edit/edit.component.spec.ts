import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { EditComponent } from './edit.component';

import { of } from 'rxjs';
import { Zone } from 'src/app/zone/models/zone';
import { Project } from '../../models/project';
import { EditPointModalService } from 'src/app/point/components/edit-point-modal/edit-point-modal.service';
import { Draw } from 'src/app/draw/models/draw';
import { DrawType } from 'src/app/draw/models/draw.type';

const editPointModalServiceMock = jest.fn(() => ({}));

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EditComponent],
      imports: [],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ project: new Project(0, [new Draw(DrawType.Terrasse)], new Zone(10, 13)) }) }
        },
        { provide: EditPointModalService, useValue: editPointModalServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
