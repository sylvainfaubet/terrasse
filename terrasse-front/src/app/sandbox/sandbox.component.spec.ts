import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { SandboxComponent } from './sandbox.component';

describe('SandboxComponent', () => {
    let component: SandboxComponent;
    let fixture: ComponentFixture<SandboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [MaterialModule],
            declarations: [SandboxComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SandboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
