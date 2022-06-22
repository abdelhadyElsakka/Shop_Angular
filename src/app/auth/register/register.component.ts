import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  strongPasswordPattern:RegExp = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
  emailPattern:RegExp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
  userNamePattern:RegExp = new RegExp("/^\S*$/");

  signUp:FormGroup = this.fb.group ({
    name: ["",[Validators.required]],
    email: ["",[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]],
    userName: ["",[Validators.required,Validators.pattern(this.userNamePattern)]],
    password: ["",[Validators.required,Validators.minLength(8),Validators.pattern(this.strongPasswordPattern)]],
    confirmPassword: ["",[Validators.required]],

  })

  showError:boolean=false;

  constructor(private fb:FormBuilder) { }

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
