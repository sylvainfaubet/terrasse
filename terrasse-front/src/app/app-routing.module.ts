import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
	{ path: 'home', component: DashboardComponent },
	{ path: 'sandbox', component: SandboxComponent },
	{ path: '**', redirectTo: 'home' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
