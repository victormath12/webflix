import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  /**
   * Retorna uma lista de cursos de uma API
   */
  getCursos() {

    return [
      {titulo: 'AngularJS', horas: 21, descricao: 'Cursos de AngularJS para portais'},
      {titulo: 'C# .NET', horas: 21, descricao: 'Cursos de C# para desktop'},
      {titulo: 'Java JSF', horas: 21, descricao: 'Cursos de Java com primefaces'}
    ];

  }

}
