import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'webflix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  sidebar: Boolean = false;

  cursos = [
    {
       titulo: 'Java JSF',
       horas: 21,
       descricao: 'Cursos de Java com primefaces',
       imagem: 'https://udemy-images.udemy.com/course/240x135/1026604_790b_2.jpg'
    },
    {
      titulo: 'Java JSF',
      horas: 21,
      descricao: 'Cursos de Java com primefaces',
      imagem: 'https://udemy-images.udemy.com/course/240x135/1267132_58bc_3.jpg'
   },
   {
    titulo: 'Java JSF',
    horas: 21,
    descricao: 'Cursos de Java com primefaces',
    imagem: 'https://udemy-images.udemy.com/course/240x135/1364796_919c.jpg'
   },
   {
      titulo: 'Java JSF',
      horas: 21,
      descricao: 'Cursos de Java com primefaces',
      imagem: 'https://udemy-images.udemy.com/course/240x135/1105026_43f3.jpg'
    },
    {
      titulo: 'Java JSF',
      horas: 21,
      descricao: 'Cursos de Java com primefaces',
      imagem: 'https://udemy-images.udemy.com/course/240x135/1225734_d634_2.jpg'
    }
  ];

  open() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }

}
