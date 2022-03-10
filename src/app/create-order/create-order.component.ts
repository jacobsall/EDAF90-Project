import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit, OnDestroy {
  private activeSub: any;
  private active: any;
  public isLinear: boolean = true;

  private getActiveRestaurant() {
    return this.dataService.getActiveRestaurant()
      .subscribe(item => {
        this.active = item
      });
  }

  public hasPicked() {
    return this.active !== undefined;
  }

  constructor(private dataService: GlobalDataService) {}

  ngOnInit(): void {
    this.activeSub = this.getActiveRestaurant();
  }

  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }
}
