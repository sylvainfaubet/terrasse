import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeComponent } from './mode.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

describe('ModeComponent', () => {
  let component: ModeComponent;
  let fixture: ComponentFixture<ModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModeComponent],
      imports: [MatButtonToggleModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
