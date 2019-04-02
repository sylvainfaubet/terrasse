import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawInfoComponent } from './draw-info.component';

describe('DrawInfoComponent', () => {
  let component: DrawInfoComponent;
  let fixture: ComponentFixture<DrawInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
