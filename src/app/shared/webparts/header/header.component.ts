import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'webflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categorias: Observable<any[]>;

  private collectionName = 'cursos';

  private categoriasCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.categoriasCollection = db.collection<any>(this.collectionName);
  }

  ngOnInit() {
    this.categorias = this.listCategorias();
  }

  listCategorias(): Observable<any[]> {
    return this.db.collection(this.collectionName).valueChanges();
  }

}
