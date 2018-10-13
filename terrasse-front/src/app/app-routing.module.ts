import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: '', pathMatch: 'full', redirectTo: 'projects/1/draw' },
    {
        path: 'sandbox',
        canLoad: ['canLoadSanbox'],
        loadChildren: './sandbox/sandbox.module#SandboxModule',
    },
    {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule',
    },
    {
        path: 'kito',
        // canLoad: ['canLoadKito'],
        loadChildren: './kito/kito.module#KitoModule',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [
        {
            provide: 'canLoadSanbox',
            useValue: () => !environment.production,
        },
        {
            provide: 'canLoadKito',
            useValue: () => new Date().toDateString() === new Date('2018-10-13').toDateString(),
        },
    ],
})
export class AppRoutingModule {}
