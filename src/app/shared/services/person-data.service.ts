import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  constructor(
    private firestore: AngularFirestore
  ) {
    firestore.collection('persons').snapshotChanges()
      .subscribe(test => console.log(test, 'firebase works'));
  }
}
