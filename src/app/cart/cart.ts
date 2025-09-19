import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://awgeuwksprjjxrxylzkk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3Z2V1d2tzcHJqanhyeHlsemtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzQ3MDksImV4cCI6MjA3MDE1MDcwOX0.ORBx86uR3FPNLb-HhtzDuLXJ4CiZ8tjH5vCIgptvkF8';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  selectedProduct: any = null;
  isSubmitting = false;
  orderData = {
    name: '',
    email: '',
    number: '',
    address: ''
  };

  constructor(public cartService: CartService) {}

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  orderNow(product: any) {
    this.selectedProduct = product;
    // إعادة تعيين البيانات
    this.orderData = {
      name: '',
      email: '',
      number: '',
      address: ''
    };
    // فتح الـ modal
    const modal = document.getElementById('orderModal');
    if (modal) {
      const bootstrap = (window as any).bootstrap;
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    }
  }

  async submitOrder() {
    if (!this.selectedProduct) return;
    
    this.isSubmitting = true;
    
    try {
      const orderInfo = {
        name: this.orderData.name,
        email: this.orderData.email,
        number: this.orderData.number,
        address: this.orderData.address,
        product: this.selectedProduct.name,
        price: this.selectedProduct.price * this.selectedProduct.count
      };

      const { error } = await supabase
        .from('order')
        .insert([orderInfo]);

      if (!error) {
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
        // إغلاق الـ modal
        const modal = document.getElementById('orderModal');
        if (modal) {
          const bootstrap = (window as any).bootstrap;
          const modalInstance = bootstrap.Modal.getInstance(modal);
          modalInstance.hide();
        }
        // حذف المنتج من السلة
        this.cartService.removeFromCart(this.selectedProduct.id);
        this.selectedProduct = null;
      } else {
        alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
        console.error('Error:', error);
      }
    } catch (error) {
      alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
      console.error('Error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
