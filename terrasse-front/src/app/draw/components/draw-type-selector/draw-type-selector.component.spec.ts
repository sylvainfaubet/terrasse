import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTypeSelectorComponent } from './draw-type-selector.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DrawTypeSelectorComponent', () => {
    let component: DrawTypeSelectorComponent;
    let fixture: ComponentFixture<DrawTypeSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DrawTypeSelectorComponent],
            imports: [MaterialModule, NoopAnimationsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DrawTypeSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
