import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://awgeuwksprjjxrxylzkk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3Z2V1d2tzcHJqanhyeHlsemtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzQ3MDksImV4cCI6MjA3MDE1MDcwOX0.ORBx86uR3FPNLb-HhtzDuLXJ4CiZ8tjH5vCIgptvkF8';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';
  error = '';
  showIframe = false;

  async submitForm() {
    const { error } = await supabase
      .from('clients')
      .insert([{
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }]);
    if (!error) {
      alert('تم تسجيل بياناتك بنجاح!');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.error = '';
    } else {
      this.error = 'حدث خطأ أثناء إرسال البيانات، حاول مرة أخرى.';
      alert(this.error);
    }
  }
}
