import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material/material.module';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    const TITLE = 'titre';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [MaterialModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        component.title = TITLE;
        fixture.detectChanges();
        expect(fixture.elementRef.nativeElement.innerText).toBe(TITLE);
    });
});
