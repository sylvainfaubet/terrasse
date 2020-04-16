import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StructureEditComponent } from './components/structure-edit/structure-edit.component';
import { StructureConfigComponent } from './components/structure-config/structure-config.component';
import { StructureMoveComponent } from './components/structure-move/structure-move.component';
import { StructureActionsComponent } from './components/structure-actions/structure-actions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    StructureEditComponent,
    StructureConfigComponent,
    StructureMoveComponent,
    StructureActionsComponent
  ],
  exports: [StructureEditComponent],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatExpansionModule],
})
export class StructureModule { }
