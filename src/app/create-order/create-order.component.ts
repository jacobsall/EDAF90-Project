import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit, OnDestroy {
  private activeSub: any;
  private active: any;
  public isLinear: boolean = true;
  private cart: any;

  private getActiveRestaurant() {
    return this.dataService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item
      });
  }

  public hasPicked() {
    return this.active !== undefined;
  }

  constructor(private dataService: GlobalDataService,
    private restaurantsService: RestaurantsService
    ) {}

  ngOnInit(): void {
    this.activeSub = this.getActiveRestaurant();
    this.getCart();
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }

  private getCart() {
    return this.dataService.getCart()
      .subscribe(item => {
        this.cart = item;
      });
  }

  sendOrder(): void{
    this.restaurantsService.pushCart();
    this.dataService.clearCart();
    this.dataService.clearActive();
  }
}
