import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.html',
  styleUrls: ['./favorite.css']
})
export class Favorite {
  favoriteProducts: any[] = [];

  constructor(public cartService: CartService) {
    this.loadFavorites();
  }

  loadFavorites() {
    const favIds = JSON.parse(localStorage.getItem('favoriteIds') || '[]');
    const allProducts = this.getAllProducts();
    this.favoriteProducts = allProducts.filter(p => favIds.includes(p.id));
  }

  getAllProducts() {
    // المنتجات من ملف products.ts
    return [
      { id: 1, name: 'Rolex Submariner', price: 1500, image: 'images/1.jpg' },
      { id: 2, name: 'Omega Speedmaster', price: 2000, image: 'images/2.jpg' },
      { id: 3, name: 'Tag Heuer Carrera', price: 1800, image: 'images/3.jpg' },
      { id: 4, name: 'Rolex Explorer', price: 1700, image: 'images/4.jpeg' },
      { id: 5, name: 'Omega Seamaster', price: 2200, image: 'images/5.jpg' },
      { id: 6, name: 'Tag Heuer Monaco', price: 1900, image: 'images/6.jpg' },
      { id: 7, name: 'Rolex Daytona', price: 2500, image: 'images/7.jpg' },
      { id: 8, name: 'Omega Constellation', price: 2100, image: 'images/8.jpeg' },
      { id: 9, name: 'Rolex Lady-Datejust', price: 1600, image: 'images/9.jpeg' },
      { id: 10, name: 'Omega De Ville', price: 1700, image: 'images/10.jpeg' },
      { id: 11, name: 'Tag Heuer Aquaracer', price: 1800, image: 'images/11.jpeg' },
      { id: 12, name: 'Rolex Yacht-Master', price: 2300, image: 'images/12.jpeg' },
      { id: 13, name: 'Omega Planet Ocean', price: 2400, image: 'images/13.jpeg' },
      { id: 14, name: 'Tag Heuer Formula 1', price: 1500, image: 'images/14.jpeg' },
      { id: 15, name: 'Rolex Air-King', price: 1400, image: 'images/15.jpeg' },
      { id: 16, name: 'Omega Railmaster', price: 1600, image: 'images/16.jpeg' },
      { id: 17, name: 'Tag Heuer Link', price: 1700, image: 'images/17.jpeg' },
      { id: 18, name: 'Rolex Milgauss', price: 1800, image: 'images/18.jpeg' },
      { id: 19, name: 'Omega Globemaster', price: 1900, image: 'images/19.jpeg' },
      { id: 20, name: 'Tag Heuer Grand Carrera', price: 2000, image: 'images/20.jpeg' },
      { id: 21, name: 'Rolex Cellini', price: 2100, image: 'images/21.jpeg' },
      { id: 22, name: 'Omega Ladymatic', price: 2200, image: 'images/22.jpeg' },
      { id: 23, name: 'Tag Heuer Professional', price: 2300, image: 'images/23.jpeg' },
      { id: 24, name: 'Rolex Pearlmaster', price: 2400, image: 'images/24.jpeg' },
      { id: 25, name: 'Omega Aqua Terra', price: 2500, image: 'images/25.jpeg' },
      { id: 26, name: 'Tag Heuer S/el', price: 2600, image: 'images/26.jpeg' },
      { id: 27, name: 'Rolex Oyster Perpetual', price: 2700, image: 'images/27.jpeg' },
      { id: 28, name: 'Omega Museum', price: 2800, image: 'images/28.jpeg' },
      { id: 29, name: 'Tag Heuer Kirium', price: 2900, image: 'images/29.jpeg' },
      { id: 30, name: 'Rolex GMT-Master II', price: 3000, image: 'images/30.jpeg' },
      { id: 31, name: 'Omega Prestige', price: 3100, image: 'images/31.jpeg' }
    ];
  }

  buyNow(product: any) {
    this.cartService.addToCart(product);
    window.alert('تم إضافة المنتج إلى السلة بنجاح!');
  }

  removeFavorite(productId: number) {
    let favIds = JSON.parse(localStorage.getItem('favoriteIds') || '[]');
    favIds = favIds.filter((id: number) => id !== productId);
    localStorage.setItem('favoriteIds', JSON.stringify(favIds));
    this.loadFavorites();
  }
}
