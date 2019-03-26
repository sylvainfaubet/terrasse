import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPointModalService } from './edit-point-modal/edit-point-modal.service';
import { EditPointModalComponent } from './edit-point-modal/edit-point-modal.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ModeComponent } from './mode/mode.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [EditPointModalComponent, ModeComponent],
    entryComponents: [EditPointModalComponent],
    exports: [ModeComponent],
    imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
    providers: [EditPointModalService],
})
export class PointModule {}
