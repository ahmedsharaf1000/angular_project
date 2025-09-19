import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartCount = 0;
  cartItems: any[] = [];

  constructor() {
    // تحميل السلة من localStorage عند بدء التطبيق
    const savedCart = localStorage.getItem('cartItems');
    const savedCount = localStorage.getItem('cartCount');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
    if (savedCount) {
      this.cartCount = +savedCount;
    }
  }

  addToCart(product: any) {
    this.cartCount++;
    const found = this.cartItems.find(item => item.id === product.id);
    if (found) {
      found.count++;
    } else {
      this.cartItems.push({ ...product, count: 1 });
    }
    // حفظ السلة في localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('cartCount', this.cartCount.toString());
  }
    // حذف منتج واحد من السلة
    removeFromCart(productId: number) {
      const index = this.cartItems.findIndex(item => item.id === productId);
      if (index > -1) {
        this.cartItems.splice(index, 1);
        this.cartCount = this.cartItems.length;
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        localStorage.setItem('cartCount', this.cartCount.toString());
      }
    }

  getCartCount() {
    return this.cartCount;
  }

  clearCart() {
    this.cartItems = [];
    this.cartCount = 0;
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartCount');
  }
}
