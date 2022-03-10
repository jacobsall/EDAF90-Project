import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveRestaurantService {

  private subject: Subject<any> = new BehaviorSubject<any>(undefined);

  getActiveRestaurant(): Observable<any> {
    return this.subject.asObservable();
  } 

  setActiveRestaurant(id: string) {
    this.subject.next({activeId: id});
  }

  constructor() {}
}
