import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';

import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PickRestaurantComponent } from './pick-restaurant/pick-restaurant.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChangeRestaurantDialogComponent } from './change-restaurant-dialog/change-restaurant-dialog.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { RestaurantsService } from './restaurants.service';
import { ActiveRestaurantService } from './active-restaurant.service';
import { CreateOrderComponent } from './create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PickRestaurantComponent,
    LandingPageComponent,
    ChangeRestaurantDialogComponent,
    ViewMenuComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [ActiveRestaurantService,RestaurantsService],
  bootstrap: [AppComponent],
  entryComponents: [ChangeRestaurantDialogComponent]
})
export class AppModule { }
