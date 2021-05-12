import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl(''),
      province: new FormControl(''),
      zipCode: new FormControl(''),
    }),
  });

  // registerForm = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     province: new FormControl(''),
  //     zipCode: new FormControl(''),
  //   }),
  // });

  username = this.registerForm.get('username');
  email = this.registerForm.get('email');
  password = this.registerForm.get('password');
  confirmPassword = this.registerForm.get('confirmPassword');
  city = this.registerForm.get('city');
  province = this.registerForm.get('province');
  zipCode = this.registerForm.get('zipCode');

  mostrarDatos() {
    console.log(this.registerForm.valid);
  }
}
