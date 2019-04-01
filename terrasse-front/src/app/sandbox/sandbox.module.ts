import { NgModule } from '@angular/core';

import { SandboxComponent } from './sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { PointModule } from '../point/point.module';
import { BlankComponent } from './blank/blank.component';

@NgModule({
    imports: [
        SandboxRoutingModule,
        PointModule
    ],
    declarations: [SandboxComponent, BlankComponent],
})
export class SandboxModule {}
