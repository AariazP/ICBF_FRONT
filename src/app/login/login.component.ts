import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private httpService: HttpServiceService) { 

    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });


  }


  login():void{

    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    if(email == ''){
      alert('Email is required');
      return;
    }

    if(password == ''){
      alert('Password is required');
      return;
    }

    this.httpService.login(email, password).subscribe((data) => {
      if(data){
        this.router.navigate(['/dashboard']);
      }else{
        alert('Invalid credentials');
      }
    });


  }
}
