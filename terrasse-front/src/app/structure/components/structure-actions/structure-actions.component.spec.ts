import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureActionsComponent } from './structure-actions.component';

describe('StructureActionsComponent', () => {
  let component: StructureActionsComponent;
  let fixture: ComponentFixture<StructureActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
