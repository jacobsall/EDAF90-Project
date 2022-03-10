import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ChangeRestaurantDialogComponent } from '../change-restaurant-dialog/change-restaurant-dialog.component';
import { ActiveRestaurantService } from '../active-restaurant.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-pick-restaurant',
  templateUrl: './pick-restaurant.component.html',
  styleUrls: ['./pick-restaurant.component.css']
})
export class PickRestaurantComponent implements OnInit, OnDestroy {

  public restaurants: any;
  public mapOptions: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    mapTypeId: 'hybrid',
    zoom: 15,
    fullscreenControl: true,
    controlSize: 30,
  }
  private active: any;
  private activeSub: any;
  private restaurantsSub: any;

  public onClick(id: string) {
    if (this.active !== undefined) {
      this.openDialog(id)
    }
    else {
      this.activeService.setActiveRestaurant(id);
    }
    console.log(this.restaurants[0].location._lat)
  }

  public isActive(id: string) {
    return id === this.active?.activeId;
  }


  public getCoord(location: any) {
    const lat: number = location._lat;
    const lng: number = location._long;
    const center = new google.maps.LatLng(lat, lng);
    return center;
  }

  private openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(ChangeRestaurantDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.activeService.setActiveRestaurant(id);
      }
    });
  }

  private getActiveRestaurant() {
    return this.activeService.getActiveRestaurant()
      .subscribe(item => this.active = item);
  }

  private getRestaurants() {
    return this.restaurantsService.getRestaurants()
      .subscribe(items => this.restaurants = items)
  }

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private activeService: ActiveRestaurantService,
    private restaurantsService: RestaurantsService)
    {}

  ngOnInit(): void {
    this.activeSub = this.getActiveRestaurant();
    this.restaurantsSub = this.getRestaurants();
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
    this.restaurantsSub.unsubscribe();
  }

}
