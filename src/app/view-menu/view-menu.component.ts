import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_DATA } from '../mock-restaurant';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  id = history.state.id || 0;
  menu = MOCK_DATA[this.id].menu;

  public onClick() {
    console.log(this.menu);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
