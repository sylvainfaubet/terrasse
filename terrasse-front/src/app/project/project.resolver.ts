import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
    constructor(private readonly projectService: ProjectService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const project = this.projectService.getProject(route.paramMap.get('id'));
        if (!project) {
            return Promise.reject('not Found');
        } else {
            return project;
        }
    }
}
