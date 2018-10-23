import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConfigureComponent } from './configure.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfigureComponent', () => {
    let component: ConfigureComponent;
    let fixture: ComponentFixture<ConfigureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
            declarations: [ConfigureComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        data: of({
                            project: { area: { width: 10, height: 13 }, polygons: [{ name: undefined, path: [] }] },
                            config: { terrasse: {} },
                        }),
                    },
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigureComponent);
        component = fixture.componentInstance;
        component.currentPolygon = component.project.polygons[0];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});