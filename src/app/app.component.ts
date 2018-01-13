import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'webflix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  cursos = [
    {titulo: 'AngularJS', horas: 21, descricao: 'Cursos de AngularJS para portais'},
    {titulo: 'C# .NET', horas: 21, descricao: 'Cursos de C# para desktop'},
    {titulo: 'Java JSF', horas: 21, descricao: 'Cursos de Java com primefaces'}
  ];

}
