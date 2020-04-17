import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneConfigComponent } from './zone-config.component';
import { Zone } from '../../models';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ZoneConfigComponent', () => {
  let component: ZoneConfigComponent;
  let fixture: ComponentFixture<ZoneConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneConfigComponent],
      imports: [],
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
