import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatToolbarModule,
} from '@angular/material';

const Modules = [
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatToolbarModule,
];

@NgModule({
	imports: Modules,
	exports: Modules,
})
export class MaterialModule {}
