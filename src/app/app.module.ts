import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
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
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

import { PickRestaurantComponent } from './pick-restaurant/pick-restaurant.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChangeRestaurantDialogComponent } from './change-restaurant-dialog/change-restaurant-dialog.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ActiveRestaurantService } from './active-restaurant.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PickRestaurantComponent,
    LandingPageComponent,
    ChangeRestaurantDialogComponent,
    ViewMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatDialogModule
  ],
  providers: [ActiveRestaurantService],
  bootstrap: [AppComponent],
  entryComponents: [ChangeRestaurantDialogComponent]
})
export class AppModule { }
