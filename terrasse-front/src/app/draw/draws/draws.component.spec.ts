import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawsComponent } from './draws.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Draw } from '../draw';
import { DrawType } from '../draw.type';

describe('DrawsComponent', () => {
    let component: DrawsComponent;
    let fixture: ComponentFixture<DrawsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DrawsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DrawsComponent);
        component = fixture.componentInstance;
        component.draws = [new Draw(DrawType.Terrasse)];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
