import { Injectable } from "@angular/core";
import { Draw } from "../../draw/models/draw";
import { DrawType } from "../../draw/models/draw.type";
import { Project } from "../models/project";
import { Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  projects: Array<Project> = [new Project(0, [new Draw(DrawType.Terrasse)])];

  constructor() { }

  createProject(): Project {
    this.projects.push(new Project(this.projects.length));

    return this.projects[this.projects.length - 1];
  }

  getProject(id): Observable<Project> {
    console.log("ProjectService", "getProject", this);
    if (id > this.projects.length) {
      throwError("not Found");
    }

    return of(this.projects[id]);
  }

  setProjectFromData(data) {
    const project = new Project(this.projects.length);
    project.setFromJSON(data);
    this.projects.push(project);
    console.log("ProjectService", "setProjectFromData", this);
    return project;
  }
}
