import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private angularFirestore: AngularFirestore) { }

  insert(collectionName: string, obj: any) {
    obj['id'] = uuid()
    let collection = this.angularFirestore.collection(collectionName)
    collection.doc(obj['id']).set(obj).then(() => {
      console.log("inserted: " + obj)
    }).catch(err => {
      console.log("error: " + obj + " " + err)
    })
  }

  read(collectionName: string): Observable<any> {
    let collection = this.angularFirestore.collection(collectionName)
    return collection.valueChanges()
  }
  
}
/*
  dataService.insert({lastName: 'deSouza', firstName: 'Preston' })
*/