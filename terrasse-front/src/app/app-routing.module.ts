import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent },
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
            project: {
                area: {
                    height: 15,
                    width: 25,
                },
                objects: [
                    {
                        type: 'terrasse',
                        polygon: [{ x: 0, y: 0 }, { x: 13, y: 0 }, { x: 13, y: 10 }, { x: 0, y: 10 }],
                    },
                    {
                        type: 'piscine',
                        polygon: [{ x: 2, y: 2 }, { x: 9, y: 2 }, { x: 9, y: 8 }, { x: 2, y: 8 }],
                    },
                ],
            },
        },
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
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
export class AppRoutingModule {}
