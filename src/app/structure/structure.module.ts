import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StructureEditComponent } from './components/structure-edit/structure-edit.component';
import { StructureConfigComponent } from './components/structure-config/structure-config.component';
import { StructureMoveComponent } from './components/structure-move/structure-move.component';
import { StructureActionsComponent } from './components/structure-actions/structure-actions.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    StructureEditComponent,
    StructureConfigComponent,
    StructureMoveComponent,
    StructureActionsComponent
  ],
  exports: [StructureEditComponent],
  imports: [CommonModule, SharedModule, MatExpansionModule],
})
export class StructureModule { }
