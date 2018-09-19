import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox.component';
import { FooterComponent } from '../footer/footer.component';

const routes: Routes = [
    {
        path: '',
        component: SandboxComponent,
        children: [{ path: '', component: FooterComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SandboxRoutingModule {}
