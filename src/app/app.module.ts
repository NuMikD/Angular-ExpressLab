import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartItemsComponent } from './cartItems/cartItems.component';
import { Api } from './services/api.services';

const appRoutes: Routes = [
  {path: '', component: CartItemsComponent },
  // { path: 'pokemon', component: PokemonComponent },
  // { path: 'pokemon-detail', component: PokemonDetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes
    ),
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
