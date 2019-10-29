import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'project' },
    {
        path: 'project',
        loadChildren: './project/project.module#ProjectModule',
    },
    {
        path: 'location',
        loadChildren: './location/location.module#LocationModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor() { }
}
