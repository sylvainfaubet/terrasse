import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { SandboxComponent } from './sandbox.component';

const routes: Routes = [
    {
        path: '',
        component: SandboxComponent,
        children: [{ path: '', component: BlankComponent}]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SandboxRoutingModule {}
