import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishItemsModule } from './components/wish-items/wish-items.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WishItemsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
