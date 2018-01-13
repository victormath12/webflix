import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  // Atributos
  titulo: string;
  horas: number;
  descricao: string;

  constructor() {
    this.titulo = 'Angular 5 com PWA';
    this.horas = 24;
    this.descricao = 'Curso de Angular para web com PWA';
  }

  ngOnInit() {
  }

}
