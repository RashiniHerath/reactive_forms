import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  registrationForm = new FormGroup({
    username: new FormControl('Rash'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''), 
    address: new FormGroup({
      city: new FormControl(''), 
      state: new FormControl(''), 
      postalCode: new FormControl('')
    })
  });
}
