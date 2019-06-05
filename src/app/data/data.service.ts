import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';
import { DataObject } from "./DataObject";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private angularFirestore: AngularFirestore) { }

  insertUpdate(collectionName: string, formObject: DataObject) {
    let forUpdate: Boolean
    if (formObject.id == undefined) {
      formObject.id = uuid()
      forUpdate = false
    } else {
      forUpdate = true
    }
    let collection: AngularFirestoreCollection<DataObject> = this.angularFirestore.collection(collectionName)
    collection.doc(formObject.id).set(formObject).then(() => {
      let msg = forUpdate ? "updated" : "inserted"
      console.log(msg, formObject)
    }).catch(err => {
      console.log("error: " + formObject + " " + err)
    })
  }

  read(collectionName: string): Observable<DataObject[]> {
    let collection: AngularFirestoreCollection<DataObject> = this.angularFirestore.collection(collectionName)
    return collection.valueChanges()
  }

}
/*
  dataService.insert("Person", {lastName: 'deSouza', firstName: 'Preston' })
*/