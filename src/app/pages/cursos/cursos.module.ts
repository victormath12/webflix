import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  declarations: [CursosComponent]
})
export class CursosModule { }
