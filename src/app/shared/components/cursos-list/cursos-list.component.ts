import { ValidationService } from '../../services/validation.service';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'webflix-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  /**
   * Titulo da lista de cursos
   */
  @Input()
  title: Object;

  /**
   * Subtitulo da lista de cursos
   */
  @Input()
  subtitle: Object;

  /**
   * Filtro de listagem do Curso
   * ex: {key: 'categoria', value: 'java'}
   */
  @Input()
  filter: Object;

  cursos: Observable<any[]>;

  private collectionName = 'cursos';

  private cursosCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private validationService: ValidationService) {
    this.cursosCollection = db.collection<any>(this.collectionName);
  }

  ngOnInit() {
    this.cursos = this.listCursos();
  }

  listCursos(): Observable<any[]> {
    if (this.validateFilter()) {
      return this.db.collection(this.collectionName, ref => ref.where(this.filter['key'], '==', this.filter['value'])).valueChanges();
    } else {
      return this.db.collection(this.collectionName).valueChanges();
    }
  }

  validateFilter(): boolean {
    if (this.validationService.isDefined(this.filter) &&
        this.validationService.isDefined(this.filter['key']) &&
        this.validationService.isDefined(this.filter['value'])) { return true; }
    return false;
  }

}
