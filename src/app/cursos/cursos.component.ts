import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  /**
   * Lista de Cursos
   */
  cursos: Object[];

  constructor(private _cursosService: CursosService) {

    /** Lista de Cursos (vindo do Service) */
    this.cursos = this._cursosService.getCursos();

  }

  ngOnInit() {
  }

}
