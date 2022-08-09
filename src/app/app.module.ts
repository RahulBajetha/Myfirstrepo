import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FriendsComponent } from './friends/friends.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FriendsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
