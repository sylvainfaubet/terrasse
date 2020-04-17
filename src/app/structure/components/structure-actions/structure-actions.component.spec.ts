import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureActionsComponent } from './structure-actions.component';
import { Draw } from 'src/app/draw/models/draw';
import { DrawType } from 'src/app/draw/models/draw.type';
import { DrawService } from 'src/app/draw/services/draw.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const drawServiceMock = jest.fn(() => ({}));

describe('StructureActionsComponent', () => {
  let component: StructureActionsComponent;
  let fixture: ComponentFixture<StructureActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StructureActionsComponent],
      providers: [{
        provide: DrawService, useValue: drawServiceMock
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureActionsComponent);
    component = fixture.componentInstance;
    component.draw = new Draw(DrawType.Terrasse);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
