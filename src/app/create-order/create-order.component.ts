import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MOCK_DATA } from '../mock-restaurant';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public restaurants = MOCK_DATA;
  public ids = Object.keys(this.restaurants);
  public isLinear: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
