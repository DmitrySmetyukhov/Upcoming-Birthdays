import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from 'rxjs';
import {Person} from '../interfaces';
import {map, tap} from 'rxjs/operators';
import {UtilityService} from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private personsState$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  public persons$: Observable<Person[]> = this.personsState$.asObservable().pipe(
    map(list => {
      return list.map(item => {
        return {...item};
      });
    })
  );

  constructor(
    private firestore: AngularFirestore,
    private utility: UtilityService
  ) {
    firestore.collection('persons').snapshotChanges()
      .pipe(
        tap(snapshot => {
          const transformedData: Person[] = snapshot.map(item => {
            const data: any = item.payload.doc.data();
            return {
              id: item.payload.doc.id,
              ...data,
              dateOfBirth: data.dateOfBirth.toDate()
            };
          });

          this.personsState$.next(
            this.utility.sortByUpComingDates(transformedData)
          );
        })
      )
      .subscribe();
  }

  public addPerson(person: Person) {
    return this.firestore.collection('persons').add(person);
  }

  public deletePerson(id: string) {
    return this.firestore.collection('persons').doc(id).delete();
  }
}
