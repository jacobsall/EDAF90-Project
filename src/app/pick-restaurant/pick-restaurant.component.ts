import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ChangeRestaurantDialogComponent } from '../change-restaurant-dialog/change-restaurant-dialog.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
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
    dialogConfig.data = {
      id
    }

    const dialogRef = this.dialog.open(ChangeRestaurantDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.activeService.setActiveRestaurant(id);
        this.router.navigate(['/menu'], {state: {id: this.activeId}});
      }
    });
  }

  getActiveRestaurant(): void {
    this.activeService.getActiveRestaurant()
      .subscribe(observable => this.active = observable);
  }

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private activeService: ActiveRestaurantService)
    { }

  ngOnInit(): void {
    this.getActiveRestaurant();
  }

}
