import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { validateHeaderName } from 'http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private fb: FormBuilder){}
  registrationForm = this.fb.group({
    username: ['', Validators.required , Validators.minLength(3)],
    password: [''],
    confirmPassword: [''], 
    address: this.fb.group({
      city: [''], 
      state: [''], 
      postalCode: ['']
    })
  });

  // registrationForm = new FormGroup({
  //   username: new FormControl('Rash'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''), 
  //   address: new FormGroup({
  //     city: new FormControl(''), 
  //     state: new FormControl(''), 
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData(){
    this.registrationForm.setValue({
      username: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Gotham',
        state: 'New York',
        postalCode: '12345'
      }
    }); 
  }
}

//set value is used to set values  to all form controls and patch values is used to set few of the formControl