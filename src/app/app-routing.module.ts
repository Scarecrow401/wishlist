import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishItemsComponent } from './components/wish-items/wish-items.component';

const routes: Routes = [
  { path: 'wish-list', component: WishItemsComponent },
  { path: '**', redirectTo: 'wish-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
