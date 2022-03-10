import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_DATA } from '../mock-restaurant';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  private id = history.state.id || 0;
  menu = MOCK_DATA[this.id].menu;
  pizzas = Object.keys(this.menu);
  private done = false;

  public ingredientString(pizza: string) {
    return this.menu[pizza].ingredients.reduce((tot,curr) => tot + ", " + curr);
  }

  public onClick() {
    console.log(this.menu);
    this.done = true;
  }

  public hasPicked() {
    return this.done;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
