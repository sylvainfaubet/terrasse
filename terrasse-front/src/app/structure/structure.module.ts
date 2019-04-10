import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { StructureConfigComponent } from './structure-config/structure-config.component';

@NgModule({
    declarations: [StructureConfigComponent],
    exports: [StructureConfigComponent],
    imports: [CommonModule, FlexLayoutModule, FormsModule, MaterialModule],
})
export class StructureModule {}
