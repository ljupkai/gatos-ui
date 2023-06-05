import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserLogin } from '../interfaces/user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  emailControl!: FormControl<string>;
  passwordControl!: FormControl<string>;

  userInfo = {
    token: '',
    name: '',
    email: '',
    image: '',
  };

  isLoading: boolean = false;
  error: string = '';

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private fb: NonNullableFormBuilder
  ) { }

  ngOnInit(): void {
    this.emailControl = this.fb.control('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordControl = this.fb.control('', Validators.required);

    this.loginForm = this.fb.group({
      emailControl: this.emailControl,
      passwordControl: this.passwordControl,
    });
  }

  async login(): Promise<void> {

    const user: UserLogin = {
      email: this.loginForm.get('emailControl')?.value,
      password: this.loginForm.get('passwordControl')?.value,
    };

    this.isLoading = true;

    this.authService
      .login(user)
      .pipe(tap(() => { this.router.navigate(['/gatos']); this.isLoading = false; }))
      .subscribe({
        error: (error) => {
          if (error.error && error.error.message === 'Unauthorized'){
            this.error = 'El usuario no existe'
          } else{
            this.error = 'Datos incorrectos. Intenta de nuevo'
          }
          this.isLoading = false; },
      });
  }

  validClasses(control: FormControl, validClass: string, errorClass: string) {
    return {
      [validClass]: control.touched && control.valid,
      [errorClass]: control.touched && control.invalid,
    };
  }

}
