import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EditPointModalComponent } from './edit-point-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditPointModalComponent', () => {
    let component: EditPointModalComponent;
    let fixture: ComponentFixture<EditPointModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditPointModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {},
                },
                {
                    provide: MatDialogRef,
                    useValue: {},
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditPointModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
