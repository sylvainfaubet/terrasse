import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';

const routes: Routes = [{ path: '', component: BirthdayComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class KitoRoutingModule {}
