
import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Slider, Products  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
