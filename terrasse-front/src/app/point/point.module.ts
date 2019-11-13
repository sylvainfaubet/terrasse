import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EditPointModalComponent } from './edit-point-modal/edit-point-modal.component';
import { EditPointModalService } from './edit-point-modal/edit-point-modal.service';
import { ModeComponent } from './mode/mode.component';

@NgModule({
  declarations: [EditPointModalComponent, ModeComponent],
  entryComponents: [EditPointModalComponent],
  exports: [ModeComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  providers: [EditPointModalService]
})
export class PointModule { }
