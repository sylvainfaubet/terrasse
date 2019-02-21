import { Project } from '../model/project';
import { Injectable } from '@angular/core';
import { DrawType, Draw } from '../model';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects: Project[] = [new Project(0, [new Draw(DrawType.Terrasse)])];

    createProject(): Project {
        this.projects.push(new Project(this.projects.length));
        return this.projects[this.projects.length - 1];
    }

    getProject(id): Project {
        console.log('getProject', id, this.projects[id - 1]);
        return this.projects[id - 1];
    }
}
