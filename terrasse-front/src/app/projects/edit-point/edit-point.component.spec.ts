import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EditPointComponent } from './edit-point.component';
import { MaterialModule } from '../../material/material.module';
import { Point } from '../../geometry/model/point';

describe('EditPointComponent', () => {
    let component: EditPointComponent;
    let fixture: ComponentFixture<EditPointComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditPointComponent],
            imports: [MaterialModule, FormsModule, NoopAnimationsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditPointComponent);
        component = fixture.componentInstance;
        component.point = new Point(10, 20);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
