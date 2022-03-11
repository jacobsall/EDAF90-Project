import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  public viewCart: any;
  private cart: any;


  constructor(private globalService: GlobalDataService) { }

  ngOnInit(): void {
    this.getCart();
  }

  private getCart() {
    return this.globalService.getCart()
      .subscribe(item => {
        this.cart = item;
        this.viewCart = this.cart && Object.keys(this.cart);
      });
  }

  cartString(item: string) {
    return item+' '+this.cart[item].amount+ 'st   à  ' +this.cart[item].price+ ' kr';
  }

  totalPrice(){
    if(this.cart === undefined){
      return 0;
    }
    return Object.keys(this.cart)
    .map(x=> this.cart[x].amount * this.cart[x].price)
    .reduce((tot, elem) => tot + elem);
  }

}
