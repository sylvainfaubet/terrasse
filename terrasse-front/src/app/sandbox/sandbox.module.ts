import { NgModule } from '@angular/core';

import { SandboxComponent } from './sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { AppCommonModule } from '../app.module';
import { ProjectsModule } from '../projects/projects.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [SandboxRoutingModule, AppCommonModule, ProjectsModule, FlexLayoutModule],
    declarations: [SandboxComponent],
})
export class SandboxModule {}
