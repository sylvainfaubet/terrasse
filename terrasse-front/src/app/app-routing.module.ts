import { NgModule, OnInit } from '@angular/core';
import { NavigationError, Router, RouterModule, Routes } from '@angular/router';

import { Subscription } from 'rxjs';
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
export class AppRoutingModule implements OnInit {

    constructor(private readonly router: Router) { }

    public ngOnInit(): Subscription {
        return this.router.events
        .pipe(filter((event) => event instanceof NavigationError))
        .subscribe((event: NavigationError) => {
            if (event.url !== '/project/0') {
                this.router.navigate(['project', 0]);
            }
        });
    }

}
