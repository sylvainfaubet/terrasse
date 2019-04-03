import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawInfoComponent } from './draw-info.component';
import { PolygonService } from 'src/app/polygon/polygon.service';
import { Draw } from '../draw';
import { DrawType } from '../draw.type';

class MockService {

}

describe('DrawInfoComponent', () => {
  let component: DrawInfoComponent;
  let fixture: ComponentFixture<DrawInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawInfoComponent ],
      providers:[{provide:PolygonService, useClass:MockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawInfoComponent);
    component = fixture.componentInstance;
    component.draw = new Draw(DrawType.Piscine);
    fixture.detectChanges();
  });

  it('should create', ()=>{
    expect(component).toBeTruthy();
  });
});
