import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationError } from '@angular/router';

import { filter } from 'rxjs/operators';
import { NoProdCanLoad } from '../environments/noProd.canload';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'project/0' },
    {
        path: 'sandbox',
        canLoad: [NoProdCanLoad],
        loadChildren: './sandbox/sandbox.module#SandboxModule',
    },
    {
        path: 'project',
        loadChildren: './project/project.module#ProjectModule',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [NoProdCanLoad],
})
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.events.pipe(filter(event => event instanceof NavigationError)).subscribe((event: NavigationError) => {
            if (event.url !== '/project/0') {
                console.log(event);
                this.router.navigate(['project', 0]);
            }
        });
    }
}
