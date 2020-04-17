import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEditComponent } from './structure-edit.component';
import { DrawType } from 'src/app/draw/models/draw.type';
import { Draw } from 'src/app/draw/models/draw';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StructureEditComponent', () => {
  let component: StructureEditComponent;
  let fixture: ComponentFixture<StructureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StructureEditComponent],
      imports: [MatExpansionModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEditComponent);
    component = fixture.componentInstance;
    component.draw = new Draw(DrawType.Terrasse);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
