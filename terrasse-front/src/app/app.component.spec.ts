import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
    // const title = 'Terrasse 2.0';
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    }));

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    // it(`should have as title '${title}'`, async(() => {
    //     expect(component.title).toEqual(`${title}`);
    // }));
});
