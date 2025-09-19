import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail {
  product: any = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const productData = localStorage.getItem('selectedProduct');
    if (productData) {
      this.product = JSON.parse(productData);
    } else {
      this.router.navigate(['/products']);
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
