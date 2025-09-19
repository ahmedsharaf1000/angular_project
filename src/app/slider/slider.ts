import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider implements OnInit, OnDestroy {
  // Array of slides data
  slides = [
    {
      image: '/images/1.jpg',
      title: 'Luxury Collection',
      description: 'Discover our exclusive range of premium watches',
      buttonText: 'Shop Now',
      buttonClass: 'btn-warning'
    },
    {
      image: '/images/2.jpg',
      title: 'Classic & Modern',
      description: 'Timeless designs crafted with precision',
      buttonText: 'Explore',
      buttonClass: 'btn-light'
    },
    {
      image: '/images/3.jpg',
      title: 'Limited Editions',
      description: 'Own a masterpiece, crafted just for you',
      buttonText: 'View Collection',
      buttonClass: 'btn-outline-light'
    }
  ];

  currentSlideIndex = 0;
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    // Start automatic sliding
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // Clear interval when component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Start automatic sliding
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  // Go to next slide
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // Go to previous slide
  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Go to specific slide
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  // Handle slide button click
  onSlideButtonClick(slideIndex: number): void {
    console.log(`Button clicked on slide ${slideIndex + 1}`);
    // Add your navigation logic here
  }
}