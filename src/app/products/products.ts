import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  favoriteIds: number[] = [];

  selectedCategory: string = 'category';
  selectedGender: string = 'gender';
  selectedStyle: string = 'style';
  selectedType: string = 'type';
  selectedPrice: string = 'price';
  searchTerm: string = '';

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
  // تعيين القيم الافتراضية للفلاتر
  this.selectedCategory = this.categories[0];
  this.selectedGender = this.genders[0];
  this.selectedStyle = this.styles[0];
  this.selectedType = this.types[0];
  this.selectedPrice = this.prices[0];

    // جلب كلمة البحث من localStorage إذا وجدت
    const storedSearch = localStorage.getItem('searchTerm');
    if (storedSearch) {
      this.searchTerm = storedSearch;
      localStorage.removeItem('searchTerm');
    }

    // جلب المفضلة من localStorage
    const storedFav = localStorage.getItem('favoriteIds');
    if (storedFav) {
      this.favoriteIds = JSON.parse(storedFav);
    }
  }
  // إضافة/إزالة منتج من المفضلة
  toggleFavorite(watch: any) {
    const idx = this.favoriteIds.indexOf(watch.id);
    if (idx > -1) {
      this.favoriteIds.splice(idx, 1);
    } else {
      this.favoriteIds.push(watch.id);
    }
    localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds));
  }

  isFavorite(watch: any): boolean {
    return this.favoriteIds.includes(watch.id);
  }

  buyNow(watch: any) {
    const confirmed = window.confirm('هل تريد تأكيد شراء المنتج وإضافته إلى السلة؟');
    if (confirmed) {
      this.cartService.addToCart(watch);
      window.alert('تم إضافة المنتج إلى السلة بنجاح!');
    }
  }

  showDetails(watch: any) {
    localStorage.setItem('selectedProduct', JSON.stringify(watch));
    this.router.navigate(['/product', watch.id]);
  }

  // كل التصنيفات
  categories = ['category', 'Rolex', 'Omega', 'Tag Heuer'];
  genders = ['gender', 'male', 'female'];
  styles = ['style', 'classic', 'sport'];
  types = ['type', 'luxury', 'chronograph', 'racing', 'adventure', 'diver', 'square', 'dress', 'pilot', 'field', 'scientific'];
  prices = ['price', '0-1500', '1501-2500', '2501-3500'];

  // المنتجات
  watches = [
    { id: 1, name: 'Rolex Submariner', price: 1500, image: 'images/1.jpg', category: 'Rolex', gender: 'male', style: 'classic', type: 'luxury', quantity: 5 },
    { id: 2, name: 'Omega Speedmaster', price: 2000, image: 'images/2.jpg', category: 'Omega', gender: 'male', style: 'sport', type: 'chronograph', quantity: 3 },
    { id: 3, name: 'Tag Heuer Carrera', price: 1800, image: 'images/3.jpg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'racing', quantity: 0 },
    { id: 4, name: 'Rolex Explorer', price: 1700, image: 'images/4.jpeg', category: 'Rolex', gender: 'male', style: 'classic', type: 'adventure', quantity: 1 },
    { id: 5, name: 'Omega Seamaster', price: 2200, image: 'images/5.jpg', category: 'Omega', gender: 'male', style: 'sport', type: 'diver', quantity: 0 },
    { id: 6, name: 'Tag Heuer Monaco', price: 1900, image: 'images/6.jpg', category: 'Tag Heuer', gender: 'male', style: 'classic', type: 'square', quantity: 3 },
    { id: 7, name: 'Rolex Daytona', price: 2500, image: 'images/7.jpg', category: 'Rolex', gender: 'male', style: 'sport', type: 'chronograph', quantity: 6 },
    { id: 8, name: 'Omega Constellation', price: 2100, image: 'images/8.jpeg', category: 'Omega', gender: 'female', style: 'classic', type: 'luxury', quantity: 0 },
    { id: 9, name: 'Rolex Lady-Datejust', price: 1600, image: 'images/9.jpeg', category: 'Rolex', gender: 'female', style: 'classic', type: 'luxury', quantity: 4 },
    { id: 10, name: 'Omega De Ville', price: 1700, image: 'images/10.jpeg', category: 'Omega', gender: 'female', style: 'classic', type: 'dress', quantity: 2 },
    { id: 11, name: 'Tag Heuer Aquaracer', price: 1800, image: 'images/11.jpeg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'diver', quantity: 3 },
    { id: 12, name: 'Rolex Yacht-Master', price: 2300, image: 'images/12.jpeg', category: 'Rolex', gender: 'male', style: 'sport', type: 'luxury', quantity: 2 },
    { id: 13, name: 'Omega Planet Ocean', price: 2400, image: 'images/13.jpeg', category: 'Omega', gender: 'male', style: 'sport', type: 'diver', quantity: 0 },
    { id: 14, name: 'Tag Heuer Formula 1', price: 1500, image: 'images/14.jpeg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'racing', quantity: 5 },
    { id: 15, name: 'Rolex Air-King', price: 1400, image: 'images/15.jpeg', category: 'Rolex', gender: 'male', style: 'classic', type: 'pilot', quantity: 2 },
    { id: 16, name: 'Omega Railmaster', price: 1600, image: 'images/16.jpeg', category: 'Omega', gender: 'male', style: 'classic', type: 'field', quantity: 3 },
    { id: 17, name: 'Tag Heuer Link', price: 1700, image: 'images/17.jpeg', category: 'Tag Heuer', gender: 'female', style: 'classic', type: 'dress', quantity: 2 },
    { id: 18, name: 'Rolex Milgauss', price: 1800, image: 'images/18.jpeg', category: 'Rolex', gender: 'male', style: 'sport', type: 'scientific', quantity: 1 },
    { id: 19, name: 'Omega Globemaster', price: 1900, image: 'images/19.jpeg', category: 'Omega', gender: 'male', style: 'classic', type: 'luxury', quantity: 2 },
    { id: 20, name: 'Tag Heuer Grand Carrera', price: 2000, image: 'images/20.jpeg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'racing', quantity: 3 },
    { id: 21, name: 'Rolex Cellini', price: 2100, image: 'images/21.jpeg', category: 'Rolex', gender: 'male', style: 'classic', type: 'dress', quantity: 2 },
    { id: 22, name: 'Omega Ladymatic', price: 2200, image: 'images/22.jpeg', category: 'Omega', gender: 'female', style: 'classic', type: 'luxury', quantity: 0 },
    { id: 23, name: 'Tag Heuer Professional', price: 2300, image: 'images/23.jpeg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'diver', quantity: 2 },
    { id: 24, name: 'Rolex Pearlmaster', price: 2400, image: 'images/24.jpeg', category: 'Rolex', gender: 'female', style: 'classic', type: 'luxury', quantity: 1 },
    { id: 25, name: 'Omega Aqua Terra', price: 2500, image: 'images/25.jpeg', category: 'Omega', gender: 'male', style: 'classic', type: 'field', quantity: 2 },
    { id: 26, name: 'Tag Heuer S/el', price: 2600, image: 'images/26.jpeg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'racing', quantity: 3 },
    { id: 27, name: 'Rolex Oyster Perpetual', price: 2700, image: 'images/27.jpeg', category: 'Rolex', gender: 'male', style: 'classic', type: 'luxury', quantity: 2 },
    { id: 28, name: 'Omega Museum', price: 2800, image: 'images/28.jpeg', category: 'Omega', gender: 'male', style: 'classic', type: 'dress', quantity: 1 },
    { id: 29, name: 'Tag Heuer Kirium', price: 2900, image: 'images/29.jpeg', category: 'Tag Heuer', gender: 'male', style: 'sport', type: 'racing', quantity: 2 },
    { id: 30, name: 'Rolex GMT-Master II', price: 3000, image: 'images/30.jpeg', category: 'Rolex', gender: 'male', style: 'sport', type: 'pilot', quantity: 0 },
    { id: 31, name: 'Omega Prestige', price: 3100, image: 'images/31.jpeg', category: 'Omega', gender: 'female', style: 'classic', type: 'dress', quantity: 2 },
  ];

  // الفلترة المتقدمة
  get filteredWatches() {
    let watches = this.watches;
    if (this.selectedCategory !== 'category') watches = watches.filter(w => w.category === this.selectedCategory);
    if (this.selectedGender !== 'gender') watches = watches.filter(w => w.gender === this.selectedGender);
    if (this.selectedStyle !== 'style') watches = watches.filter(w => w.style === this.selectedStyle);
    if (this.selectedType !== 'type') watches = watches.filter(w => w.type === this.selectedType);
    if (this.selectedPrice !== 'price') {
      if (this.selectedPrice === '0-1500') watches = watches.filter(w => w.price <= 1500);
      else if (this.selectedPrice === '1501-2500') watches = watches.filter(w => w.price > 1500 && w.price <= 2500);
      else if (this.selectedPrice === '2501-3500') watches = watches.filter(w => w.price > 2500);
    }
    if (this.searchTerm) {
      watches = watches.filter(w => w.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    return watches;
  }

  // تحديث التصنيفات
  updateCategory(cat: string) { this.selectedCategory = cat; }
  updateGender(g: string) { this.selectedGender = g; }
  updateStyle(s: string) { this.selectedStyle = s; }
  updateType(t: string) { this.selectedType = t; }
  updatePrice(p: string) { this.selectedPrice = p; }
}
