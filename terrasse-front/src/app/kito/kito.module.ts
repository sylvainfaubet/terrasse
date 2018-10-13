import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdayComponent } from './birthday/birthday.component';
import { KitoRoutingModule } from './kito-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [CommonModule, KitoRoutingModule, MaterialModule],
    declarations: [BirthdayComponent],
})
export class KitoModule {}
