import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ChangeRestaurantDialogComponent } from '../change-restaurant-dialog/change-restaurant-dialog.component';
import { MOCK_DATA } from '../mock-restaurant';

import { ActiveRestaurantService } from '../active-restaurant.service';

@Component({
  selector: 'app-pick-restaurant',
  templateUrl: './pick-restaurant.component.html',
  styleUrls: ['./pick-restaurant.component.css']
})
export class PickRestaurantComponent implements OnInit {

  public restaurants = MOCK_DATA;
  public ids = Object.keys(this.restaurants);
  private activeId: any;


  public onClick(id: string) {
    if (this.activeId !== undefined) {
      this.openDialog(id)
    }
    else {
      this.dataService.setActiveRestaurant(id);
      //this.router.navigate(['/menu']);
    }
    console.log(this.activeId.activeId);
  }

  public isActive(id: string) {
    return id === this.activeId?.activeId;
  }

  private openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      id
    }

    const dialogRef = this.dialog.open(ChangeRestaurantDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.dataService.setActiveRestaurant(id);
        //this.router.navigate(['/menu']);
      }
    });  
  }

  getActiveRestaurant(): void {
    this.dataService.getActiveRestaurant()
      .subscribe(id => this.activeId = id);
  }

  constructor(
    private dialog: MatDialog, 
    private router: Router, 
    private dataService: ActiveRestaurantService) 
    {

    }

  ngOnInit(): void {
    this.getActiveRestaurant();
  }

}
