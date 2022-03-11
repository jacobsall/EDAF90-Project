import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickRestaurantComponent } from "./pick-restaurant/pick-restaurant.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'placed', component: OrderPlacedComponent},
  {path: 'order', component: CreateOrderComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
