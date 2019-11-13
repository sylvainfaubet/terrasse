import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { ZoneModule } from '../zone/zone.module';
import { SavingComponent } from './saving/saving.component';
import { PolygonModule } from '../polygon/polygon.module';

@NgModule({
  imports: [
    CommonModule,
    DownloadModule,
    FormsModule,
    MatDialogModule,
    MaterialModule,
    PointModule,
    DrawModule,
    PolygonModule,
    ProjectsRoutingModule,
    StructureModule,
    ZoneModule,
  ],
  exports: [],
  entryComponents: [EditComponent],
  declarations: [DrawingAreaComponent, EditComponent, ConfigureComponent, SavingComponent],
  providers: [],
})
export class ProjectModule { }
