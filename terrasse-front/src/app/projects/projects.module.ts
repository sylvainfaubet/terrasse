import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';
import { EditPointComponent } from './edit-point/edit-point.component';

@NgModule({
    imports: [ProjectsRoutingModule, MaterialModule, FormsModule, CommonModule, FlexLayoutModule],
    exports: [EditPointComponent],
    declarations: [DrawingAreaComponent, EditComponent, EditPointComponent],
})
export class ProjectsModule {}
