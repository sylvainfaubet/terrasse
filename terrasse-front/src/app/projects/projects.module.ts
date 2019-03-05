import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';
import { EditPointComponent } from './edit-point/edit-point.component';
import { EditPointModalComponent } from './edit-point-modal/edit-point-modal.component';
import { ConfigureComponent } from './configure/configure.component';
import { GeometryModule } from '../geometry/geometry.module';
import { DownloadModule } from '../download/download.module';

@NgModule({
    imports: [ProjectsRoutingModule, MaterialModule, FormsModule, CommonModule, FlexLayoutModule, GeometryModule, DownloadModule],
    exports: [EditPointComponent],
    entryComponents: [EditPointModalComponent],
    declarations: [DrawingAreaComponent, EditComponent, EditPointComponent, EditPointModalComponent, ConfigureComponent],
})
export class ProjectsModule {}
