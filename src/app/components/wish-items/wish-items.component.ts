import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WishListService } from 'src/app/services/wish-list.service';
import { IWishItem } from './types';

@Component({
  selector: 'app-wish-items',
  templateUrl: './wish-items.component.html',
  styleUrls: ['./wish-items.component.scss'],
})
export class WishItemsComponent implements OnInit {
  items: IWishItem[] = [];
  form: FormGroup;

  constructor(private readonly wishListService: WishListService) {}

  ngOnInit(): void {
    this.items = JSON.parse(this.wishListService.getWishlist());

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required),
    });
  }

  addNewWish(): void {
    if (this.form.valid) {
      this.items.push({ wishTitle: this.form.controls.title.value, wishLink: this.form.controls.link.value });
      this.form.reset();
      this.wishListService.setWishlist(this.items);
    }
  }

  removeWish(index: number): void {
    this.items.splice(index, 1);
    this.wishListService.setWishlist(this.items);
  }
}
