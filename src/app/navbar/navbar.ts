import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterLinkWithHref]
})
export class Navbar implements OnInit {
  isScrolled = false;
  cartItemsCount = 3;
  isMobileMenuOpen = false;
  isLoginPage = false;
  constructor(public cartService: CartService, private router: Router) {}

  // Sample categories for demonstration
  categories = [
    { name: "Men's Watches", icon: "gender-male" },
    { name: "Women's Watches", icon: "gender-female" },
    { name: "Luxury Watches", icon: "gem" },
    { name: "Sports Watches", icon: "speedometer2" }
  ];


  ngOnInit(): void {
    this.isLoginPage = this.router.url === '/login';
    this.router.events?.subscribe((event: any) => {
      if (event?.url) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollOffset > 50;
  }

  // Function to handle search
  search(): void {
    const searchTerm = prompt('اكتب اسم الساعة للبحث:');
    if (searchTerm) {
      localStorage.setItem('searchTerm', searchTerm);
      this.router.navigate(['/products']);
    }
  }

  // Function to handle cart click
  openCart(): void {
    console.log('Opening shopping cart');
    // Implement cart functionality here
    alert('Your cart has ' + this.cartItemsCount + ' items');
  }

  // Function to handle profile click
  openProfile(): void {
    console.log('Opening user profile');
    // Implement profile functionality here
  }

  // Function to handle shop now click
  shopNow(): void {
    console.log('Redirecting to shop');
    // Implement shop now functionality here
  }

  // Function to toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
  }

  // Function to handle category selection
  selectCategory(category: any): void {
    console.log('Selected category:', category.name);
    // Implement category selection functionality here
  }
}