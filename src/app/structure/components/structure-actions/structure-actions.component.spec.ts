import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureActionsComponent } from './structure-actions.component';
import { Draw } from 'src/app/draw/models/draw';
import { DrawType } from 'src/app/draw/models/draw.type';

describe('StructureActionsComponent', () => {
  let component: StructureActionsComponent;
  let fixture: ComponentFixture<StructureActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StructureActionsComponent]
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
