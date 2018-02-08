import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'webflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuarioLogado: Object;

  categorias: Observable<any[]>;

  private collectionName = 'cursos';

  private categoriasCollection: AngularFirestoreCollection<any>;

  private providerAuth: firebase.auth.GoogleAuthProvider;

  constructor(private db: AngularFirestore, public fbAuth: AngularFireAuth) {

    this.categoriasCollection = db.collection<any>(this.collectionName);

  }

  ngOnInit() {

    /*this.usuarioLogado = {
      nome: 'Victor',
      avatar: 'https://avatars2.githubusercontent.com/u/11219999?s=400&u=c75e0601c2c9a64439903662b8f370faa67c6d80&v=4'
    };*/

    this.providerAuth = new firebase.auth.GoogleAuthProvider();
    //this.providerAuth.addScope('user');

    this.categorias = this.listCategorias();

  }

  listCategorias(): Observable<any[]> {
    return this.db.collection(this.collectionName).valueChanges();
  }

  login() {

    this.fbAuth.auth.signInWithPopup(this.providerAuth).then((result) => {

      console.log('Firebase User: ', result.user);

      this.usuarioLogado = {
        nome: result.user.displayName,
        email: result.user.email,
        telefone: result.user.phoneNumber,
        avatar: result.user.photoURL,
      };

      console.log(this.usuarioLogado);

    }).catch((error) => {
      console.log('Erro ao Autenticar: ', error);
    });

  }

  logout() {
    this.fbAuth.auth.signOut();
  }

}
