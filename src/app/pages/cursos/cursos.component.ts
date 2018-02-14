import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webflix-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  filterCursosAngular: Object;

  filterCursosJava: Object;

  constructor() { }

  ngOnInit() {
    this.filterCursosAngular = {key: 'categoria', value: 'angular'};
    this.filterCursosJava = {key: 'categoria', value: 'java'};
  }

}
