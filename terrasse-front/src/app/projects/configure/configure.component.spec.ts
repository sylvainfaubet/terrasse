import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConfigureComponent } from './configure.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Draw, DrawType, Project, Zone } from '../shared/model';
import { StructureModule } from 'src/app/structure/structure.module';

describe('ConfigureComponent', () => {
    let component: ConfigureComponent;
    let fixture: ComponentFixture<ConfigureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule, FormsModule, StructureModule, BrowserAnimationsModule],
            declarations: [ConfigureComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        data: of({
                            project: new Project(0, [new Draw(DrawType.Terrasse)], new Zone(10, 13)),
                            config: { terrasse: {} },
                        }),
                    },
                },

                { provide: Router, useValue: {} },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigureComponent);
        component = fixture.componentInstance;
        component.currentDraw = component.project.draws[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
