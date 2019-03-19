import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureConfigComponent } from './structure-config.component';

describe('StructureConfigComponent', () => {
  let component: StructureConfigComponent;
  let fixture: ComponentFixture<StructureConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
