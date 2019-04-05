import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Zone } from 'src/app/zone/zone';
import { MaterialModule } from '../../material/material.module';
import { Project } from '../project';
import { DrawingAreaComponent } from './drawing-area.component';

describe('DrawingAreaComponent', () => {
    let component: DrawingAreaComponent;
    let fixture: ComponentFixture<DrawingAreaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [MaterialModule, BrowserAnimationsModule],
            declarations: [DrawingAreaComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: { data: of({ project: new Project(0, [], new Zone(10, 13)), config: { terrasse: {} } }) }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DrawingAreaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
