import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  /**
   * Lista de Cursos
   */
  cursos: Object[];

  constructor() {

    /** Lista de Cursos (todo: virá de um API) */
    this.cursos = [
      {titulo: 'AngularJS', horas: 21, descricao: 'Cursos de AngularJS para portais'},
      {titulo: 'C# .NET', horas: 21, descricao: 'Cursos de C# para desktop'},
      {titulo: 'Java JSF', horas: 21, descricao: 'Cursos de Java com primefaces'}
    ];

  }

  ngOnInit() {
  }

}
