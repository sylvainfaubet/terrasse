import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ProjectsRoutingModule, MaterialModule, FormsModule],
    declarations: [CreateComponent],
})
export class ProjectsModule {}
