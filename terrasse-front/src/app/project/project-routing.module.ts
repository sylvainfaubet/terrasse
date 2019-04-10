import { filter } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationError } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { ProjectResolver } from './project.resolver';

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
export class ProjectsRoutingModule {
    constructor(private router: Router) {
        this.router.events.pipe(filter(event => event instanceof NavigationError)).subscribe((event: NavigationError) => {
            if (event.url !== '/project/0') {
                this.router.navigate(['project', 0]);
            }
        });
    }
}
