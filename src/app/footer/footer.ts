import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Footer implements OnInit {
  currentYear: number = new Date().getFullYear();

  // يمكنك إضافة بيانات ديناميكية هنا إذا لزم الأمر
  socialLinks = [
    { icon: 'bi-facebook', url: 'https://facebook.com', name: 'Facebook' },
    { icon: 'bi-instagram', url: 'https://instagram.com', name: 'Instagram' },
    { icon: 'bi-twitter', url: 'https://twitter.com', name: 'Twitter' },
    { icon: 'bi-pinterest', url: 'https://pinterest.com', name: 'Pinterest' }
  ];

  quickLinks = [
    { name: "Men's Watches", url: "#" },
    { name: "Women's Watches", url: "#" },
    { name: "Luxury Collection", url: "#" },
    { name: "Sports Watches", url: "#" },
    { name: "New Arrivals", url: "#" }
  ];

  companyLinks = [
    { name: "About Us", url: "#" },
    { name: "Our Services", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms & Conditions", url: "#" },
    { name: "Careers", url: "#" }
  ];

  supportLinks = [
    { name: "FAQs", url: "#" },
    { name: "Contact Us", url: "#" },
    { name: "Shipping Info", url: "#" },
    { name: "Returns & Exchanges", url: "#" },
    { name: "Warranty", url: "#" }
  ];

  constructor() { }

  ngOnInit(): void {
    // يمكنك جلب البيانات من service هنا إذا كنت تستخدم API
  }

  subscribeNewsletter(email: string): void {
    if (email && this.isValidEmail(email)) {
      console.log('Subscribing email:', email);
      // هنا يمكنك إضافة منطق الاشتراك في النشرة البريدية
    } else {
      console.log('Invalid email address');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // دالة للتنقل إلى قسم معين في الصفحة
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}