import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Idea } from './idea.interface';

@Injectable({ providedIn: 'root' })
export class IdeasService {
  constructor(private af: AngularFirestore) {}

  get collection() {
    return this.af.collection<Idea>('ideas');
  }

  getAll(): Observable<Idea[]> {
    return this.collection.snapshotChanges().pipe(
      map((docActions) =>
        docActions.map((doc) => ({
          ...doc.payload.doc.data(),
          id: doc.payload.doc.id,
        }))
      )
    );
  }
}
