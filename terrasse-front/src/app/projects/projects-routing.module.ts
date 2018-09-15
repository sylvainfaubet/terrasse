import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    {
        path: 'projects',

        children: [
            {
                path: 'create',
                component: CreateComponent,
                data: {
                    project: {},
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule {}
