import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneConfigComponent } from './zone-config.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { Zone } from '../zone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ZoneConfigComponent', () => {
  let component: ZoneConfigComponent;
  let fixture: ComponentFixture<ZoneConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneConfigComponent ],
      imports:[MaterialModule, FormsModule,BrowserAnimationsModule]
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
