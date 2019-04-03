import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectService } from './project.service';
import { Project } from './project';

@Injectable({
    providedIn: 'root',
})
export class ProjectResolver implements Resolve<Project> {
    constructor(private projectService: ProjectService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const project = this.projectService.getProject(route.paramMap.get('id'));
        if (!project) {
            return Promise.reject('not Found');
        } else {
            return project;
        }
    }
}
