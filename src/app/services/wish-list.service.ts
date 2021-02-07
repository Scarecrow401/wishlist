import { Injectable } from '@angular/core';
import { IWishItem } from '../components/wish-items/types';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishlistStorageKey = 'wishlist';
  constructor() {}

  setWishlist(items: IWishItem[]): void {
    localStorage.setItem(this.wishlistStorageKey, JSON.stringify(items));
  }

  getWishlist(): string {
    return localStorage.getItem(this.wishlistStorageKey);
  }

  removeWishlist(): void {
    localStorage.removeItem(this.wishlistStorageKey);
  }
}
