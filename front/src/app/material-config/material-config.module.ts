import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';

const MODULES = [MatToolbarModule];

@NgModule({
  imports: MODULES,
  exports : MODULES,
  declarations: []
})
export class MaterialConfigModule { }
