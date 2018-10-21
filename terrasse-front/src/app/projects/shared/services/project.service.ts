import { Project } from '../model/project';
import { Injectable } from '@angular/core';
import { PolygonType } from '../model/polygon';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects: Project[] = [{ id: 1, area: { width: 20, height: 15 }, polygons: [{ type: PolygonType.Terrasse, path: [] }] }];

    createProject(): Project {
        this.projects.push(new Project(this.projects.length + 1));
        return this.projects[this.projects.length - 1];
    }

    getProject(id): Project {
        console.log('getProject', id, this.projects[id - 1]);
        return this.projects[id - 1];
    }
}
