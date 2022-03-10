import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private firestore: Firestore) {
  }

  getRestaurants() {
    const restaurantsRef =  collection(this.firestore, 'restaurants');
    return collectionData(restaurantsRef, {idField: 'id'});
  }

  pushCart(){
    //TODO Säll löser
  }

}