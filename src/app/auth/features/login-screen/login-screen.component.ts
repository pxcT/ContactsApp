import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '@app-auth/services/auth.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  constructor(private authService: AuthService) { }
}
