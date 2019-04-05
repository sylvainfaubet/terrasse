import { NgModule } from '@angular/core';

import { PointModule } from '../point/point.module';
import { BlankComponent } from './blank/blank.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';

@NgModule({
    imports: [
        SandboxRoutingModule,
        PointModule
    ],
    declarations: [SandboxComponent, BlankComponent]
})
export class SandboxModule {}
