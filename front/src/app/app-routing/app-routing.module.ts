import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SandboxComponent }	from '../sandbox/sandbox.component';
import { NavComponent} from '../nav/nav.component';
const routes: Routes = [
	{
		path : 'sandbox',
		component: SandboxComponent
	},
	{
		path : '',
		component : NavComponent,
		children:[
			{
				path: '',
				component: DashboardComponent,
			}
		]
	}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
