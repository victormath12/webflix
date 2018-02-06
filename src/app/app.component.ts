import { async } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'webflix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  sidebar: Boolean = false;

  open() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }

}
