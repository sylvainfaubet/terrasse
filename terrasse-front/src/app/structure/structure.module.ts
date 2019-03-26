import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureService } from './structure.service';
import { StructureConfigComponent } from './structure-config/structure-config.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [StructureConfigComponent],
    exports: [StructureConfigComponent ],
    providers: [{ provide: StructureService }],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
    ]
})
export class StructureModule { }
