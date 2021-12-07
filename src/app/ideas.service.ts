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

  getOne(id: string) {
    return this.collection
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((doc) => ({
          ...doc.payload.data(),
          id: doc.payload.id,
        }))
      );
  }

  async create(idea: Idea) {
    try {
      return await this.collection.add(idea);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, idea: Partial<Idea>) {
    try {
      await this.collection.doc(id).update(idea);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      await this.collection.doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  }
}
