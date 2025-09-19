import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  name = '';
  phone = '';
  email = '';
  password = '';
  country = '';
  error = '';

  constructor(private router: Router) {}

  register() {
    // تحقق من الاسم: يجب أن يكون حروف فقط
    const nameRegex = /^[\u0600-\u06FFa-zA-Z ]+$/;
    if (!nameRegex.test(this.name)) {
      this.error = 'يرجى إدخال اسم صحيح (حروف فقط)';
      return;
    }
    // تحقق من رقم الهاتف: يجب أن يكون أرقام فقط وطوله بين 10 و15
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(this.phone)) {
      this.error = 'يرجى إدخال رقم هاتف صحيح (10-15 رقم)';
      return;
    }
    // تحقق من البريد الإلكتروني
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(this.email)) {
      this.error = 'يرجى إدخال بريد إلكتروني صحيح';
      return;
    }
    if (!this.password || !this.country) {
      this.error = 'يرجى ملء جميع الحقول';
      return;
    }
    // حفظ بيانات المستخدم في localStorage
    localStorage.setItem('user', JSON.stringify({
      name: this.name,
      phone: this.phone,
      email: this.email,
      password: this.password,
      country: this.country
    }));
    this.router.navigate(['/home']);
  }
}
