import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private angularFirestore: AngularFirestore) { }

  insertUpdate<T>(collectionName: string, formObject: T) {
    let forUpdate: boolean
    if (formObject['id'] == undefined) {
      formObject['id'] = uuid()
      forUpdate = false
    } else {
      forUpdate = true
    }
    let collection: AngularFirestoreCollection<T> = this.angularFirestore.collection(collectionName)
    collection.doc(formObject['id']).set(formObject).then(() => {
      let msg = forUpdate ? "updated" : "created"
      console.log(msg, formObject)
    }).catch(err => {
      console.error("error: " + formObject + " " + err)
    })
  }
  
  read<T>(collectionName: string): Observable<T[]> {
    let collection: AngularFirestoreCollection<T> = this.angularFirestore.collection(collectionName)
    console.log("read", collectionName)
    return collection.valueChanges()
  }

}
