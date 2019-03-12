import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ConfigureComponent } from './configure/configure.component';
import { DownloadModule } from '../download/download.module';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';
import { EditPointModalComponent } from './edit-point-modal/edit-point-modal.component';
import { GeometryModule } from '../geometry/geometry.module';

import { MatDialogModule } from '@angular/material';
import { EditPointModalService } from './edit-point-modal/edit-point-modal.service';

@NgModule({
    imports: [ProjectsRoutingModule, MaterialModule, FormsModule, CommonModule, FlexLayoutModule, GeometryModule, DownloadModule,
        MatDialogModule],
    exports: [],
    providers: [
        { provide: EditPointModalService, useClass: EditPointModalService }],
    entryComponents: [EditComponent, EditPointModalComponent],
    declarations: [
        DrawingAreaComponent,
        EditComponent,
        EditPointModalComponent,
        ConfigureComponent
    ],
})
export class ProjectsModule { }
