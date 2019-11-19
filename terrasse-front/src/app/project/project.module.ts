import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../material/material.module";

import { DownloadModule } from "../download/download.module";

import { MatDialogModule } from "@angular/material";
import { DrawModule } from "../draw/draw.module";
import { PointModule } from "../point/point.module";
import { StructureModule } from "../structure/structure.module";
import { ZoneModule } from "../zone/zone.module";
import { PolygonModule } from "../polygon/polygon.module";
import { Router, NavigationError, Routes, RouterModule } from "@angular/router";
import { filter } from "rxjs/operators";
import { ProjectResolver } from "./resolvers/project.resolver";
import { ProjectConfigResolver } from "./resolvers/project-config.resolver";
import { components, EditComponent } from "./components";

const ROUTES: Routes = [

  { path: "", pathMatch: "full", redirectTo: "0" },
  {
    path: ":projectId",
    resolve: { project: ProjectResolver },
    children: [
      {
        path: "",
        component: EditComponent,
        resolve: {
          config: ProjectConfigResolver
        },
      },
    ],
  },
];


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
    StructureModule,
    ZoneModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [],
  entryComponents: [EditComponent],
  declarations: [components],
  providers: [],
})
export class ProjectModule {
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationError)).subscribe((event: NavigationError) => {
      if (event.url !== "/project/0") {
        this.router.navigate(["project", 0]);
      }
    });
  }
}
