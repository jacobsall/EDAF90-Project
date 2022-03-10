import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveRestaurantService {

  private restaurantSubject: Subject<any> = new BehaviorSubject<any>(undefined);

  private cartSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  getActiveRestaurant(): Observable<any> {
    return this.restaurantSubject.asObservable();
  }

  setActiveRestaurant(id: string) {
    this.restaurantSubject.next({activeId: id});
  }

  getCart(): Observable<any> {
    return this.cartSubject.asObservable();
  }

  addToCart(toAdd: string) {
    const currentValue = this.cartSubject.value || {};
    if (currentValue[toAdd]) {
      currentValue[toAdd]++;
    } else {
      currentValue[toAdd] = 1;
    }

    this.cartSubject.next(currentValue);
  }

  constructor() {}
}
