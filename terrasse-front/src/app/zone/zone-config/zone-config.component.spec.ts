import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneConfigComponent } from './zone-config.component';

describe('ZoneConfigComponent', () => {
  let component: ZoneConfigComponent;
  let fixture: ComponentFixture<ZoneConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
