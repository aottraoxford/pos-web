import { RegisterService } from './register.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null)
  });

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const obj = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    this.registerService.register(obj).subscribe(result => {
      this.router.navigateByUrl('home');
    }, error => {
      Swal.fire({
        icon: 'error',
        title: error.message
      });
    });
  }
}
