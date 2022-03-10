import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_DATA } from '../mock-restaurant';
import { GlobalDataService } from '../global-data.service';
import { RestaurantsService } from '../restaurants.service';
@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit, OnDestroy {

  private id = history.state.id || 0;
  public menu: any;
  public pizzas: any;
  private cart: any;
  private cartSub: any;
  private active: any;
  private restaurants: any;

  public ingredientString(pizza: string) {
    return this.menu[pizza].ingredients.reduce((tot: string,curr:string) => tot + ", " + curr);
  }

  public addPizza(name: string) {
    this.dataService.addToCart(name, this.menu[name].price);
    console.log(this.cart);
  }

  public hasPicked() {
    return this.cart !== undefined;
  }

  constructor(
    private dataService: GlobalDataService,
    private restaurantsService: RestaurantsService,
    ) {}

  private getCart() {
    return this.dataService.getCart()
      .subscribe(item => {
        this.cart = item;
      });
  }

  ngOnInit(): void {
    this.cartSub = this.getCart();
    this.getActiveRestaurant();
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  private getActiveRestaurant(): void {
    this.dataService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item;
        this.getMenu();
    });
  }
  private getMenu(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(items => {this.restaurants = items;
      this.menu = this.restaurants.find((a: any) => a.id === this.active?.activeId)?.menu;
      this.pizzas = this.menu && Object.keys(this.menu);
    });
  }
}
