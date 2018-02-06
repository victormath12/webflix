import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'webflix-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: Observable<any[]>;

  cursosJava: Observable<any[]>;

  category: string;

  constructor(private db: AngularFirestore) {

    this.cursos = this.getCursosDB();
    this.cursosJava = this.getCursosJava();

  }

  getCursosDB(): Observable<any[]> {
    return this.db.collection('cursos').valueChanges();
  }

  getCursosJava(): Observable<any[]> {
    return this.db.collection('cursos', ref => ref.where('categoria', '==', 'java')).valueChanges();
  }

  ngOnInit() { }

}
