import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickRestaurantComponent } from "./pick-restaurant/pick-restaurant.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
const routes: Routes = [
  {path: 'restaurant', component: PickRestaurantComponent},
  {path: 'menu', component: ViewMenuComponent},
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
