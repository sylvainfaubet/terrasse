import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditPointModalComponent } from './components/edit-point-modal/edit-point-modal.component';
import { EditPointModalService } from './components/edit-point-modal/edit-point-modal.service';
import { ModeComponent } from './components/mode/mode.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [EditPointModalComponent, ModeComponent],
  entryComponents: [EditPointModalComponent],
  exports: [ModeComponent],
  imports: [CommonModule, SharedModule, FormsModule, MatButtonToggleModule, MatDialogModule],
  providers: [EditPointModalService]
})
export class PointModule { }
