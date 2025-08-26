import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {}

  onLogin() {
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
  }
}