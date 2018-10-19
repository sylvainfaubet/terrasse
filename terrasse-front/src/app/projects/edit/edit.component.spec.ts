import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EditComponent } from './edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('EditComponent', () => {
    let component: EditComponent;
    let fixture: ComponentFixture<EditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [EditComponent],
            imports: [MaterialModule, BrowserAnimationsModule],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: { data: of({ project: { name: 'toto', area: { width: 10, height: 15 }, polygons: [] } }) },
                },
                { provide: Router, useValue: {} },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
