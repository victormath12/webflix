import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Material Design */
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

/** Webparts */
import { HeaderComponent } from './webparts/header/header.component';
import { FooterComponent } from './webparts/footer/footer.component';
import { MenuComponent } from './webparts/menu/menu.component';

/** Components */
import { CursosListComponent } from './components/cursos-list/cursos-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  declarations: [
    CursosListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  exports: [
    CursosListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
