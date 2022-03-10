import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ChangeRestaurantDialogComponent } from '../change-restaurant-dialog/change-restaurant-dialog.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MOCK_DATA } from '../mock-restaurant';

import { ActiveRestaurantService } from '../active-restaurant.service';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-pick-restaurant',
  templateUrl: './pick-restaurant.component.html',
  styleUrls: ['./pick-restaurant.component.css']
})
export class PickRestaurantComponent implements OnInit {

  public restaurants: any;
  private active: any;

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

  public hasPicked() {
    return this.active !== undefined;
  }

  private openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    // dialogConfig.data = {
    //   id
    // }

    const dialogRef = this.dialog.open(ChangeRestaurantDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.activeService.setActiveRestaurant(id);
        console.log(this.restaurants.find((x: any) => x.id === id));
        //this.router.navigate(['/menu']);
      }
    });
  }

  private getActiveRestaurant(): void {
    this.activeService.getActiveRestaurant()
      .subscribe(item => this.active = item);
  }

  private getRestaurants(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(items => this.restaurants = items)
  }

  constructor(
    private dialog: MatDialog, 
    private router: Router, 
    private activeService: ActiveRestaurantService,
    private restaurantsService: RestaurantsService) 
    { }

  ngOnInit(): void {
    this.getActiveRestaurant();
    this.getRestaurants();
  }

}
