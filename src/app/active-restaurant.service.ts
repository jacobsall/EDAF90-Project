import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveRestaurantService {

  //private activeId: string | undefined = undefined;
  private subject: Subject<any> = new Subject<any>();

  getActiveRestaurant(): Observable<any> {
    return this.subject.asObservable();
  } 

  setActiveRestaurant(id: string) {
    this.subject.next({activeId: id});
  }

  constructor() { }
}
