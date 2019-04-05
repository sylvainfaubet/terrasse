import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { ProjectsRoutingModule } from './project-routing.module';

import { DownloadModule } from '../download/download.module';
import { ConfigureComponent } from './configure/configure.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';

import { MatDialogModule } from '@angular/material';
import { DrawModule } from '../draw/draw.module';
import { PointModule } from '../point/point.module';
import { StructureModule } from '../structure/structure.module';
import { ProjectService } from './project.service';
import { ZoneModule } from '../zone/zone.module';

@NgModule({
    imports: [
        CommonModule,
        DownloadModule,
        FlexLayoutModule,
        FormsModule,
        MatDialogModule,
        MaterialModule,
        PointModule,
        DrawModule,
        ProjectsRoutingModule,
        StructureModule,
        ZoneModule,
    ],
    exports: [],
    entryComponents: [EditComponent],
    declarations: [DrawingAreaComponent, EditComponent, ConfigureComponent],
    providers: [ProjectService]
})
export class ProjectModule {}
