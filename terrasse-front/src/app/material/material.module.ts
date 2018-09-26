import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDialogModule,
} from '@angular/material';

const Modules = [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
];

@NgModule({
    imports: Modules,
    exports: Modules,
})
export class MaterialModule {}
