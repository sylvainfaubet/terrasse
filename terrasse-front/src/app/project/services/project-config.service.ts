import { Injectable } from '@angular/core';
import { ProjectConfig } from '../models/project-config';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectConfigService {

  constructor() { }

  getConfig(): Observable<ProjectConfig> {
    return of({
      terrasse: {
        fill: 'red',
        stroke: 'black',
      },
      piscine: {
        fill: 'lightblue',
        stroke: 'black',
      },
    });
  }
}
