import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Auth } from 'src/app/services/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: Auth) {
  }

  ngOnInit() { }

  async onLogin() {
    const { success, message } = await this.auth.login(this.email, this.password)
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
  }
}