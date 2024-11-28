import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    email : '',
    password : ''
  }

  router = inject(Router)

  onLogin() {
    if(this.loginObj.email == 'hello' && this.loginObj.password == 'hello') {
      this.router.navigateByUrl('/client');
      localStorage.setItem('User', this.loginObj.email)
    } else {
      alert('Invalid Credentials')
    }
  }

}

