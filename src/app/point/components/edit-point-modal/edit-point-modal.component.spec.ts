import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EditPointModalComponent } from './edit-point-modal.component';
import { Point } from '../../models';

describe('EditPointModalComponent', () => {
  let component: EditPointModalComponent;
  let fixture: ComponentFixture<EditPointModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPointModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPointModalComponent);
    component = fixture.componentInstance;
    component.point = new Point();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
