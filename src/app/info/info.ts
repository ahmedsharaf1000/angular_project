import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css']
})
export class Info {
  user: any = null;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  async logout() {
    // حذف بيانات المستخدم من السيرفر
    if (this.user && this.user.id) {
      await fetch('https://your-server.com/api/deleteUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: this.user.id })
      });
    }
    localStorage.removeItem('user');
    this.cartService.clearCart();
    window.location.href = '/login';
  }
}
