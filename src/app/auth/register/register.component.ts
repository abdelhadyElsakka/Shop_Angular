import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUp:FormGroup = this.fb.group ({
    name: ["",[Validators.required]],
    email: ["",[Validators.required,Validators.email,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    userName: ["",[Validators.required,Validators.pattern(/^[^\s]+$/)]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
    ]],
    confirmPassword: new FormControl('', [Validators.required]),
    addresses: this.fb.array([])
  },

  CustomValidators.mustMatch('password', 'confirmPassword')
  );

  showError:boolean=false;
  
  constructor(private fb:FormBuilder) {}

  get addresses() {
    return this.signUp.controls["addresses"] as FormArray;
  }

  addAddress() {
    const addressForm = this.fb.group({
        address: ['', Validators.required],
        street: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required]
    });
  
    this.addresses.push(addressForm);
  }

  deleteAddress(addressIndex: number) {
    this.addresses.removeAt(addressIndex);
  }

  ngOnInit(): void {
  }
  
  get signUpValidation(){
    return this.signUp.controls;
  }

  submitRegister(){
    if(this.signUp.valid){
      console.log(this.signUp.controls);
    }else{
      this.showError=true;
    }
  }

}
