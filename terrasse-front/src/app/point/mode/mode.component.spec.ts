import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ModeComponent } from './mode.component';

describe('ModeComponent', () => {
  let component: ModeComponent;
  let fixture: ComponentFixture<ModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeComponent ],
      imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule]
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
