import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from 'src/app/services/auth/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule ],
})
export class RegisterComponent implements OnInit {

  constructor(private auth: Auth) { }

  age: number = 0;
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

    console.log("name:", this.name);
    console.log('Edad:', this.age);
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Confirmar Contraseña:', this.confirmPassword);

  }
  ngOnInit() { }

}
