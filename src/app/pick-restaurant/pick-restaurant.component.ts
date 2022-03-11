import { Component, OnInit, OnDestroy, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ChangeRestaurantDialogComponent } from '../change-restaurant-dialog/change-restaurant-dialog.component';
import { GlobalDataService } from '../global-data.service';
import { RestaurantsService } from '../restaurants.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pick-restaurant',
  templateUrl: './pick-restaurant.component.html',
  styleUrls: ['./pick-restaurant.component.css']
})
export class PickRestaurantComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  @ViewChild('stepper') stepper: any;

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
  private resetButton: any;

  public onClick(id: string) {
    if (this.active !== undefined) {
      this.openDialog(id)
    }
    else {
      this.dataService.setActiveRestaurant(id);
    }
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
        this.dataService.setActiveRestaurant(id);
        this.dataService.clearCart();
        document.getElementById('resetStepper')?.click();
      }
    });
  }

  private getActiveRestaurant() {
    return this.dataService.getActiveRestaurant()
      .subscribe(item => this.active = item);
  }

  private getRestaurants() {
    return this.restaurantsService.getRestaurants()
      .subscribe(items => this.restaurants = items)
  }

  constructor(
    private dialog: MatDialog,
    private dataService: GlobalDataService,
    private restaurantsService: RestaurantsService,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) document: Document) {}

  ngOnInit(): void {
    this.activeSub = this.getActiveRestaurant();
    this.restaurantsSub = this.getRestaurants();
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
    this.restaurantsSub.unsubscribe();
  }

}
