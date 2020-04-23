import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPanelComponent } from './draw-panel.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Project } from 'src/app/project/models/project';

describe('DrawPanelComponent', () => {
  let component: DrawPanelComponent;
  let fixture: ComponentFixture<DrawPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawPanelComponent],
      imports: [MatExpansionModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPanelComponent);
    component = fixture.componentInstance;
    component.project = new Project(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
