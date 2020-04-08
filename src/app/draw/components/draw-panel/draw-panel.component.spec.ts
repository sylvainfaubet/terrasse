import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPanelComponent } from './draw-panel.component';

describe('DrawPanelComponent', () => {
  let component: DrawPanelComponent;
  let fixture: ComponentFixture<DrawPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
