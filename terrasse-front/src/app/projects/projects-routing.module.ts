import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';
import { ProjectResolver } from './shared/project.resolver';


const routes: Routes = [
    {
        path: 'projects',
        children: [
            {
                path: ':id',
                resolve: { project: ProjectResolver },
                children: [{
                    path: '',
                    component: EditComponent,
                },
                {
                    path: 'draw',
                    component: DrawingAreaComponent,
                    data: {
                        config: {
                            terrasse: {
                                fill: 'red',
                                stroke: 'black',
                            },
                            piscine: {
                                fill: 'lightblue',
                                stroke: 'black',
                            },
                        },
                    },
                }]
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule { }
