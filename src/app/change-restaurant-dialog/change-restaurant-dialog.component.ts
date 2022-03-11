import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-change-restaurant-dialog',
  templateUrl: './change-restaurant-dialog.component.html',
  styleUrls: ['./change-restaurant-dialog.component.css']
})
export class ChangeRestaurantDialogComponent implements OnInit {

  constructor( 
    private dialogRef: MatDialogRef<ChangeRestaurantDialogComponent>
  ){}

  ngOnInit(): void {
  }

  public save() {
    this.dialogRef.close(true);
  }
  public close() {
    this.dialogRef.close();
  }

}
