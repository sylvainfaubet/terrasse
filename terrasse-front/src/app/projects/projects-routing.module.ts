import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { EditComponent } from './edit/edit.component';
import { ProjectResolver } from './shared/services/project.resolver';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                resolve: { project: ProjectResolver },
                children: [
                    {
                        path: '',
                        component: EditComponent,
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
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule {}
