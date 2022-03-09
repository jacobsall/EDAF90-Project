import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ChangeRestaurantDialogComponent } from '../change-restaurant-dialog/change-restaurant-dialog.component';
import { MOCK_DATA } from '../mock-restaurant';

@Component({
  selector: 'app-pick-restaurant',
  templateUrl: './pick-restaurant.component.html',
  styleUrls: ['./pick-restaurant.component.css']
})
export class PickRestaurantComponent implements OnInit {

  public restaurants = MOCK_DATA;
  public ids = Object.keys(this.restaurants);
  private activeId: string | undefined = undefined;


  public onClick(id: string) {
    if (this.activeId !== undefined) {
      this.openDialog(id)
    }
    else {
      this.activeId = id;
      //this.router.navigate(['/menu']);
    }
  }

  public isActive(id: string) {
    return id === this.activeId;
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
        this.activeId = id;
        //this.router.navigate(['/menu']);
      }
    }
  );  
}

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

}
