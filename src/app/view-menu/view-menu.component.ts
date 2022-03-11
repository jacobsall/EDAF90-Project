import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import { RestaurantsService } from '../restaurants.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public menu: any;
  public pizzas: any;
  private cart: any;
  private cartSub: any;
  private activeSub: any;
  private restaurantSub: any;
  private active: any;
  private restaurants: any;


  ingredientString(pizza: string) {
    return this.menu[pizza].ingredients?.reduce((tot: string,curr:string) => tot + ", " + curr);
  }

  addPizza(name: string) {
    this.dataService.addToCart(name, this.menu[name].price);
  }

  hasPicked() {
    return this.cart !== undefined;
  }

  nbrInCart(name: string): number {
    return this.cart?.[name]?.amount;
  }


  private getActiveRestaurant() {
    return this.dataService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item;
        this.restaurantSub = this.getMenu();
    });
  }
  private getMenu() {
    return this.restaurantsService.getRestaurants()
      .subscribe(items => {this.restaurants = items;
      this.menu = this.restaurants.find((a: any) => a.id === this.active?.activeId)?.menu;
      this.pizzas = this.menu && Object.keys(this.menu);
    });
  }

  private getCart() {
    return this.dataService.getCart()
      .subscribe(item => {
        this.cart = item;
      });
  }

  constructor(
    private dataService: GlobalDataService,
    private restaurantsService: RestaurantsService,
    private breakpointObserver: BreakpointObserver
    ) {}

  ngOnInit(): void {
    this.cartSub = this.getCart();
    this.activeSub = this.getActiveRestaurant();
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
    this.activeSub.unsubscribe();
    this.restaurantSub.unsubscribe();
  }
}
