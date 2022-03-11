import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  public restaurants: any;
  private active: any;
  public extras: any;
  public keys:any;
  private cart: any;

  constructor(
    private restaurantsService: RestaurantsService,
    private dataService: GlobalDataService
  ) { }

  ngOnInit(): void {
    this.getActiveRestaurant();
    this.getCart();
  }

  private getActiveRestaurant(): void {
    this.dataService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item;
        this.getRestaurants();
    });
  }

  private getRestaurants(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(items => {this.restaurants = items;
      this.extras = this.restaurants.find((a: any) => a.id === this.active?.activeId)?.extras;
      this.keys = this.extras && Object.keys(this.extras);
    });
  }

  private getCart() {
    return this.dataService.getCart()
      .subscribe(item => {
        this.cart = item;
      });
  }

  public addExtra(name: string) {
    this.dataService.addToCart(name, this.extras[name].price);
    console.log(this.cart);
  }

  nbrInCart(name: string): number {
    return this.cart?.[name]?.amount;
  }
}
