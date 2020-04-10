import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneConfigComponent } from './zone-config.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { Zone } from '../../models';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ZoneConfigComponent', () => {
  let component: ZoneConfigComponent;
  let fixture: ComponentFixture<ZoneConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneConfigComponent],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneConfigComponent);
    component = fixture.componentInstance;
    component.zone = new Zone();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
