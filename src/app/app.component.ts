import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webflix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidebar: Boolean = false;

  constructor() { }

  ngOnInit() { }

  open() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }

}
