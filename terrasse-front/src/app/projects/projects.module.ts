import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
    imports: [ProjectsRoutingModule, MaterialModule, FormsModule, CommonModule],
    exports: [],
    declarations: [DrawingAreaComponent, EditComponent],
})
export class ProjectsModule { }
