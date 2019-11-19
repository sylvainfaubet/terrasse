import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectConfig } from "../models/project-config";
import { ProjectConfigService } from "../services/project-config.service";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProjectConfigResolver implements Resolve<ProjectConfig> {

  constructor(private readonly service: ProjectConfigService) { }

  resolve(): Observable<ProjectConfig> {
    return this.service.getConfig();
  }
}
