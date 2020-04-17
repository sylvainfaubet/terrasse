import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Structure } from '../../models/structure';
import { StructureConfigComponent } from './structure-config.component';

describe('StructureConfigComponent', () => {
  let component: StructureConfigComponent;
  let fixture: ComponentFixture<StructureConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [StructureConfigComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureConfigComponent);
    component = fixture.componentInstance;
    component.structure = new Structure();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
