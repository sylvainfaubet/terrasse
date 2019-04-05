import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { StructureConfigComponent } from './structure-config/structure-config.component';
import { StructureService } from './structure.service';

@NgModule({
    declarations: [StructureConfigComponent],
    exports: [StructureConfigComponent ],
    providers: [{ provide: StructureService }],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MaterialModule
    ]
})
export class StructureModule { }
