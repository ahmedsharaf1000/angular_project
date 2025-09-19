import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class ChatbotComponent {
  isOpen = false;

  toggleChatbot() {
    this.isOpen = !this.isOpen;
  }

  closeChatbot() {
    this.isOpen = false;
  }

}
