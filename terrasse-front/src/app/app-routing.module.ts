import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: '', pathMatch: 'full', redirectTo: 'projects/1/draw' },
];

if (!environment.production) {
    routes.push({
        path: 'sandbox',
        loadChildren: './sandbox/sandbox.module#SandboxModule',
    });
}

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
