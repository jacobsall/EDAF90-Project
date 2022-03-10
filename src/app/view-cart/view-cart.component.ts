import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(private globalService: GlobalDataService) { }

  ngOnInit(): void {
  }

}
