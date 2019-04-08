import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawCrudComponent } from './draw-crud.component';

describe('DrawCrudComponent', () => {
  let component: DrawCrudComponent;
  let fixture: ComponentFixture<DrawCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
