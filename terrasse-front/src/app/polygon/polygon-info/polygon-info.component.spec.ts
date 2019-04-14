import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonInfoComponent } from './polygon-info.component';

describe('PolygonInfoComponent', () => {
  let component: PolygonInfoComponent;
  let fixture: ComponentFixture<PolygonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
