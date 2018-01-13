import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'webflix-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  /**
   * Lista de Cursos (Object List)
   * Exemplo:
   * `[ {titulo: 'AngularJS', horas: 21, descricao: 'Cursos de AngularJS para portais'} ]`
   */
  @Input('data')
  listCursos: Object[];

  constructor() { }

  ngOnInit() { }

}
