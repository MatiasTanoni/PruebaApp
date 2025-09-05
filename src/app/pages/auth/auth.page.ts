import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from 'src/app/pages/auth/components/register/register.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, LoginComponent, RegisterComponent]
})
export class AuthPage implements OnInit {

  constructor() { }
  
  show : 'login' | 'register' = 'login';
  
  ngOnInit() {
  }

}
