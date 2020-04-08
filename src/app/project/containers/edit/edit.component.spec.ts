import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { EditComponent } from './edit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Zone } from 'src/app/zone/models/zone';
import { Project } from '../../models/project';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EditComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ project: new Project(0, [], new Zone(10, 13)) }) }
        },
        { provide: Router, useValue: {} }
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
