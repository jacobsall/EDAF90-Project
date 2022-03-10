import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { ActiveRestaurantService } from '../active-restaurant.service';

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

  constructor(
    private restaurantsService: RestaurantsService,
    private activeService: ActiveRestaurantService
  ) { }

  ngOnInit(): void {
    this.getActiveRestaurant();
  }

  private getActiveRestaurant(): void {
    this.activeService.getActiveRestaurant()
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
}
