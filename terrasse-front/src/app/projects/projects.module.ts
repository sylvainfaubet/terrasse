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
import { GeometryModule } from '../geometry/geometry.module';

import { MatDialogModule } from '@angular/material';
import { StructureModule } from '../structure/structure.module';
import { PointModule } from '../point/point.module';

@NgModule({
    imports: [
        CommonModule,
        DownloadModule,
        FlexLayoutModule,
        FormsModule,
        GeometryModule,
        MatDialogModule,
        MaterialModule,
        PointModule,
        ProjectsRoutingModule,
        StructureModule,
    ],
    exports: [],
    entryComponents: [EditComponent],
    declarations: [DrawingAreaComponent, EditComponent, ConfigureComponent],
})
export class ProjectsModule {}
