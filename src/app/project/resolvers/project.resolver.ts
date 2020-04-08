import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
  constructor(private readonly projectService: ProjectService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.projectService.getProject(route.paramMap.get('projectId'));
  }
}
