import { async } from '@angular/core/testing';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'webflix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  sidebar: Boolean = false;

  filterCursosAngular: Object;

  filterCursosJava: Object;

  constructor() { }

  ngOnInit() {
    this.filterCursosAngular = {key: 'categoria', value: 'angular'};
    this.filterCursosJava = {key: 'categoria', value: 'java'};
  }

  open() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }

}
