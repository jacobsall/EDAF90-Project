import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveRestaurantService {

  private subject: Subject<any> = new BehaviorSubject<any>(undefined);
  // private thing:any;

  getActiveRestaurant(): Observable<any> {
    // console.log(this.subject.asObservable())
    return this.subject.asObservable();
  } 

  // doStuff(){
  //   console.log("stuff")
  //   console.log(this.thing)
  // }

  setActiveRestaurant(id: string) {
    // console.log("---------------------------------------")
    // this.thing = id;
    this.subject.next({activeId: id});
  }

  constructor() {}
}
