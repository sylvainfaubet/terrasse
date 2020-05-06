import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const title = 'Terrasse 2.0';
  document.title = title;

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: []
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(component)
      .toBeTruthy();
  }));

  it(`should have as title '${title}'`, async(() => {
    expect(component.title)
      .toEqual(`${title}`);
  }));
});
