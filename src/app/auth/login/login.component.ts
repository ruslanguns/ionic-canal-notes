import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  user$ = this.authService.state$;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['ruslanguns+rusgunx@gmail.com', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login(email, password);
    }
  }

  logout() {
    this.authService.logout();
  }
}
