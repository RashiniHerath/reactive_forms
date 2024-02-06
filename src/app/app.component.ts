import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
loadApiData() {
throw new Error('Method not implemented.');
}
registrationForm: any;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
  const registrationForm = this.fb.group({
    username: ['', Validators.required , Validators.minLength(3), forbiddenNameValidator],
    password: [''],
    confirmPassword: [''], 
    address: this.fb.group({
      city: [''], 
      state: [''], 
      postalCode: ['']
    })
  }); 
 this.registrationForm.get('subscribe').valueChanges
  .subscribe((checkedValue: any) => {
  
    const email = this.registrationForm.get('email');
    if(checkedValue){
      email.setValidators(Validators.required);
    } else {
      email.clearValidators();
 
    }
    email.updateValueAndValidity();
    });
  }
  }

// function loadApiData() {
//   throw new Error('Function not implemented.');
// }
//set value is used to set values  to all form controls and patch values is used to set few of the formControl