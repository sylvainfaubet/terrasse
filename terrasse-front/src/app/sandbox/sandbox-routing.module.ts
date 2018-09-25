import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox.component';

const routes: Routes = [
    {
        path: '',
        component: SandboxComponent,
        children: [{ path: '' }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SandboxRoutingModule {}
