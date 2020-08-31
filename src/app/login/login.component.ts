import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(null),
    password: new FormControl(null)
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginService.login(this.loginForm.value.usernameOrEmail, this.loginForm.value.password)
    .subscribe((result: any) => {
      if (result.data.login.user) {
        this.router.navigateByUrl('home');
      }
    }, error => {
      Swal.fire({
        icon: 'error',
        title: error.message,
        footer: '<a href="/register">Register</a>'
      });
    });
  }

}
