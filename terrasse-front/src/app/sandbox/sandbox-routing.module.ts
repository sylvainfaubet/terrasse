import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
    {
        path: '',
        component: SandboxComponent,
        children: [{ path: '', component: HeaderComponent, data: { title: 'toto' } }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SandboxRoutingModule {}
