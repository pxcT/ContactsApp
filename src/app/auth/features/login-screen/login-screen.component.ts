import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//
import { USERS } from '@app-auth/services/mock.data';

// Services
import { AuthService } from '@app-auth/services/auth.service';
import { MAIN_APP_ROUTES } from 'app/app.routes';
@Component({
  selector: 'login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  public loginForm: FormGroup;
  
  public loading = false;
  public submitted = false;

  private mockUsers = USERS;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  
  public onSubmit() {
      if (this.loginForm.status === 'VALID') {
          const username = this.loginForm.controls.username.value;
          const password = this.loginForm.controls.password.value;

          const foundUser = this.mockUsers.find((user) => user.password === password && user.username === username);
          
          if (foundUser) {
              window.localStorage.setItem('userId', '324098-21321-dsad-32c23-21es4');
              this.router.navigate([MAIN_APP_ROUTES.HOME]);
            //   window.location.reload(); // quick-fix loading (simulate oauth-authentication)
          }
      }
  }
}
