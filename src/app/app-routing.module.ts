import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickRestaurantComponent } from "./pick-restaurant/pick-restaurant.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  {path: 'restaurant', component: PickRestaurantComponent},
  {path: '', component: LandingPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
