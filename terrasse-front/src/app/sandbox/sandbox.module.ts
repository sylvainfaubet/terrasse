import { NgModule } from '@angular/core';

import { SandboxComponent } from './sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { AppCommonModule } from '../app.module';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
    imports: [SandboxRoutingModule, AppCommonModule, ProjectsModule],
    declarations: [SandboxComponent],
})
export class SandboxModule {}
