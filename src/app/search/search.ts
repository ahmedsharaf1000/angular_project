import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchTerm: string = '';
  results: any[] = [];

  watches = [
    { id: 1, name: 'Rolex Submariner', price: 1500, image: 'images/1.jpg' },
    { id: 2, name: 'Omega Speedmaster', price: 2000, image: 'images/2.jpg' },
    { id: 3, name: 'Tag Heuer Carrera', price: 1800, image: 'images/3.jpg' },
    { id: 4, name: 'Rolex Explorer', price: 1700, image: 'images/4.jpeg' },
    { id: 5, name: 'Omega Seamaster', price: 2200, image: 'images/5.jpg' },
    { id: 6, name: 'Tag Heuer Monaco', price: 1900, image: 'images/6.jpg' },
    { id: 7, name: 'Rolex Daytona', price: 2500, image: 'images/7.jpg' },
    { id: 8, name: 'Omega Constellation', price: 2100, image: 'images/8.jpeg' },
    { id: 9, name: 'Rolex Lady-Datejust', price: 1600, image: 'images/9.jpeg' },
    { id: 10, name: 'Omega De Ville', price: 1700, image: 'images/10.jpeg' }
    // ... يمكنك إضافة باقي المنتجات هنا ...
  ];

  constructor(public cartService: CartService) {}

  doSearch() {
    const term = this.searchTerm.trim().toLowerCase();
    this.results = this.watches.filter(w => w.name.toLowerCase().includes(term));
  }

  buyNow(watch: any) {
    const confirmed = window.confirm('هل تريد تأكيد شراء المنتج وإضافته إلى السلة؟');
    if (confirmed) {
      this.cartService.addToCart(watch);
      window.alert('تم إضافة المنتج إلى السلة بنجاح!');
    }
  }
}
