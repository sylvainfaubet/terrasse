import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrasseDrawerComponent } from './terrasse-drawer.component';

describe('TerrasseDrawerComponent', () => {
  let component: TerrasseDrawerComponent;
  let fixture: ComponentFixture<TerrasseDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrasseDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrasseDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
