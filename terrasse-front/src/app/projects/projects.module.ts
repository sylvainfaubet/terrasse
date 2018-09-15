import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    imports: [CommonModule, ProjectsRoutingModule],
    declarations: [CreateComponent],
})
export class ProjectsModule {}
