import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureCalculatorComponent } from './structure-calculator.component';

describe('StructureCalculatorComponent', () => {
  let component: StructureCalculatorComponent;
  let fixture: ComponentFixture<StructureCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
