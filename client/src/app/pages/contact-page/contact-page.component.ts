import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      console.log('Form Submitted:', contactForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
