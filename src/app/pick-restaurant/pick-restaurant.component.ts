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
  }

  public isActive(id: string) {
    return id === this.active?.activeId;
  }

  private openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    const dialogRef = this.dialog.open(ChangeRestaurantDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.activeService.setActiveRestaurant(id);
        //console.log(this.restaurants.find((x: any) => x.id === id));
        //this.router.navigate(['/menu']);
      }
    });
  }

  private getActiveRestaurant() {
    return this.activeService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item
      });
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
    // this.activeService.doStuff();
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
    this.restaurantsSub.unsubscribe();
    // console.log("destroyed")
  }


}
