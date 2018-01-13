import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListComponent } from './components/cursos-list/cursos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosListComponent
  ],
  exports: [
    CursosListComponent
  ]
})
export class SharedModule { }
