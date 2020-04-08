import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEditComponent } from './structure-edit.component';

describe('StructureEditComponent', () => {
  let component: StructureEditComponent;
  let fixture: ComponentFixture<StructureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
