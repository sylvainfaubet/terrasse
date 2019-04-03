import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureConfigComponent } from './structure-config.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { Structure } from '../structure';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StructureConfigComponent', () => {
    let component: StructureConfigComponent;
    let fixture: ComponentFixture<StructureConfigComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, MaterialModule, BrowserAnimationsModule],
            declarations: [StructureConfigComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StructureConfigComponent);
        component = fixture.componentInstance;
        component.structure = new Structure();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
