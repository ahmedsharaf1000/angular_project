import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home } from './app/home/home';
import { Products } from './app/products/products';
import { Contact } from './app/contact/contact';
import { About } from './app/about/about';
import { Cart } from './app/cart/cart';
import { Login } from './app/login/login';
import { Info } from './app/info/info';
import { ProductDetail } from './app/product-detail/product-detail';
import { AuthGuard } from './app/auth.guard';
import { Search } from './app/search/search';


import { Favorite } from './app/favorite/favorite';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'products', component: Products, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductDetail, canActivate: [AuthGuard] },
  { path: 'contact', component: Contact, canActivate: [AuthGuard] },
  { path: 'about', component: About, canActivate: [AuthGuard] },
  { path: 'cart', component: Cart, canActivate: [AuthGuard] },
  { path: 'info', component: Info, canActivate: [AuthGuard] },
  { path: 'search', component: Search, canActivate: [AuthGuard] },
  { path: 'favorite', component: Favorite, canActivate: [AuthGuard] },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CommonModule)
  ]
});
