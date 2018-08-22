import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent },
    {
        path: 'sandbox',
        component: SandboxComponent,
        children: [
            {
                path: '',
                component: DrawingAreaComponent,
            },
        ],
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
