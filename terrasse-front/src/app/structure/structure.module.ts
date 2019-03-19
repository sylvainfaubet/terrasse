import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureService } from './structure.service';
import { StructureConfigComponent } from './structure-config/structure-config.component';
import { StructureInfoComponent } from './structure-info/structure-info.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [StructureConfigComponent, StructureInfoComponent],
    exports: [StructureConfigComponent, StructureInfoComponent],
    providers: [{ provide: StructureService }],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
    ]
})
export class StructureModule { }
