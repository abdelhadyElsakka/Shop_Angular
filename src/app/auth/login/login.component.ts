import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  showError:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  signIn(data:any){
    if(data.valid){
      localStorage['userData'] = data.controls.email.value;
    }else{
      this.showError=true;
    }
  }

}
