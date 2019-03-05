import { Project } from '../model/project';
import { Injectable } from '@angular/core';
import { DrawType, Draw } from '../model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private router: Router) { }

    projects: Project[] = [new Project(0, [new Draw(DrawType.Terrasse)])];

    createProject(): Project {
        this.projects.push(new Project(this.projects.length));
        return this.projects[this.projects.length - 1];
    }

    getProject(id): Project {
        if (id > this.projects.length) {
            this.router.navigate(['/projects', this.projects.length - 1]);
        }
        return this.projects[id];
    }

    setProjectFromData(data) {
        const project = new Project(this.projects.length);
        project.setFromJSON(data);
        this.projects.push(project);
        return project;
    }
}
