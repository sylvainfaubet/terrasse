import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationError } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';

import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';

export const routes: Routes = [
    // { path: 'home', component: DashboardComponent },
    { path: '', pathMatch: 'full', redirectTo: 'projects/0' },
    {
        path: 'sandbox',
        canLoad: ['canLoadSanbox'],
        loadChildren: './sandbox/sandbox.module#SandboxModule',
    },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
    providers: [
        {
            provide: 'canLoadSanbox',
            useValue: () => !environment.production,
        },
    ],
})
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationError)
        ).subscribe(() => {
            this.router.navigate(['']);
        });
    }
}
