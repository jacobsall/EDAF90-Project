import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActiveRestaurantService } from '../active-restaurant.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  private activeSub: any;
  private active: any;
  public isLinear: boolean = true;

  private getActiveRestaurant() {
    return this.activeService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item
      });
  }

  public hasPicked() {
    return this.active !== undefined;
  }

  constructor(private activeService: ActiveRestaurantService) {}

  ngOnInit(): void {
    this.activeSub = this.getActiveRestaurant();
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }
}
