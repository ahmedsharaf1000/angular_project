import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css']
})
export class Categories {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = 'All';
  @Output() categoryChange = new EventEmitter<string>();

  selectCategory(cat: string) {
    this.categoryChange.emit(cat);
  }
}
