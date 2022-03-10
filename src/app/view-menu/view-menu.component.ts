import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_DATA } from '../mock-restaurant';
import { ActiveRestaurantService } from '../active-restaurant.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit, OnDestroy {

  private id = history.state.id || 0;
  menu = MOCK_DATA[this.id].menu;
  pizzas = Object.keys(this.menu);
  private cart: any;
  private cartSub: any;

  public ingredientString(pizza: string) {
    return this.menu[pizza].ingredients.reduce((tot,curr) => tot + ", " + curr);
  }

  public addPizza(name: string) {
    this.activeService.addToCart(name);
    console.log(this.cart);
  }

  public hasPicked() {
    return this.cart !== undefined;
  }

  constructor(private activeService: ActiveRestaurantService) {}

  private getCart() {
    return this.activeService.getCart()
      .subscribe(item => {
        this.cart = item;
      });
  }

  ngOnInit(): void {
    this.cartSub = this.getCart();
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

}
