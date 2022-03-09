import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickRestaurantComponent } from "./pick-restaurant/pick-restaurant.component";
const routes: Routes = [
  {path: 'restaurant', component: PickRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
