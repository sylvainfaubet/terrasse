import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Draw } from '../draw/draw';
import { DrawType } from '../draw/draw.type';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    projects: Array<Project> = [new Project(0, [new Draw(DrawType.Terrasse)])];

    constructor(private readonly router: Router) { }

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
