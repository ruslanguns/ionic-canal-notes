import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private subject = new BehaviorSubject<any>(null);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  state$ = this.subject.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public toastController: ToastController
  ) {}

  get collection() {
    return this.firestore.collection<any>('ideasUsers');
  }

  async login(email: string, password: string) {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      const metadata = await this.getUserById(user.uid);

      this.subject.next({ user, metadata });
    } catch (error) {
      this.toastError(error);
    }
  }

  async logout() {
    await this.afAuth
      .signOut()
      .then(() => this.subject.next(null))
      .catch((error) => {
        this.toastError(error);
      });
  }

  register() {}

  requestPassword() {}

  resetPassword() {}

  async getUserById(id: string) {
    return this.collection
      .doc(id)
      .get()
      .pipe(
        map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
        shareReplay(2)
      )
      .toPromise();
  }

  async toastError(error: any) {
    const toast = await this.toastController.create({
      message:
        (error.message as string).split(': ')[1] || 'Algo malo ha ocurrido',
      duration: 15000,
      color: 'danger',
    });
    toast.present();
  }
}
