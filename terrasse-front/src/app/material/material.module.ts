import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule],
	exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule],
})
export class MaterialModule {}
