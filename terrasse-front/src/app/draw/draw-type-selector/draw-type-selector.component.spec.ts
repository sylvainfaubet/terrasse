import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTypeSelectorComponent } from './draw-type-selector.component';

describe('DrawTypeSelectorComponent', () => {
  let component: DrawTypeSelectorComponent;
  let fixture: ComponentFixture<DrawTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
