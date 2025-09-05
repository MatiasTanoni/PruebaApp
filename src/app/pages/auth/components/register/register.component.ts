import { Component, OnInit } from '@angular/core';
import {
  FormsModule, FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Auth } from 'src/app/services/auth/auth';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit {

  constructor(private auth: Auth) { }

  age!: number;
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  async onRegister() {

    try {
      const { success, message } = await this.auth.register(this.email, this.password, this.name, this.age);
      if (success) {
        console.log("Registro exitoso:", message);
      } else {
        console.error("Error en el registro:", message);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }

  }
  ngOnInit() {

    formulario = new FormGroup({
      name: new FormControl(this.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      age: new FormControl(this.age, [Validators.required, Validators.min(18), Validators.max(100)]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(this.confirmPassword, [
        Validators.required,
        Validators.minLength(8),
        this.validPassword,
      ]),
    });

    validPassword(control: AbstractControl): ValidationErrors | null {
      const error = { iguales: false };

      if (!control.value) {
        return error;
      }

      const password = control.parent?.get('password')?.value;

      if (!password) {
        return error;
      }

      if (control.value === password) {
        return null;
      } else {
        return error;
      }
    }
  }
}
