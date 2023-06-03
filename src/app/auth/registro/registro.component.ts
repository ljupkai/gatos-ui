import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  MIN_PASSWORD_LENGTH = 4;

  newUser!: User;
  saved = false;
  isLoading = false;
  error: string = '';

  registerForm!: FormGroup;
  emailGroup!: FormGroup;

  nombreControl!: FormControl<string>;
  emailControl!: FormControl<string>;
  repeatEmailControl!: FormControl<string>;
  passwordControl!: FormControl<string>;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private fb: NonNullableFormBuilder
  ) {
    this.newUser = {
      nombre: '',
      correo: '',
    };
  }
  ngOnInit(): void {
    this.nombreControl = this.fb.control('', Validators.required);
    this.emailControl = this.fb.control('', [
      Validators.required,
      Validators.email,
    ]);
    this.repeatEmailControl = this.fb.control('', [
      Validators.required,
      Validators.email,
    ]);
    this.emailGroup = this.fb.group(
      {
        emailControl: this.emailControl,
        repeatEmailControl: this.repeatEmailControl,
      },
      { validators: this.matchEmail }
    );
    this.passwordControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(this.MIN_PASSWORD_LENGTH),
    ]);
    this.registerForm = this.fb.group({
      nombreControl: this.nombreControl,
      emailGroup: this.emailGroup,
      passwordControl: this.passwordControl,
    });
  }
  register() {
    const newUser: User = {
      nombre: this.registerForm.get('nombreControl')?.value,
      correo: this.registerForm.get('emailGroup')?.get('emailControl')?.value,
      password: this.registerForm.get('passwordControl')?.value,
    };
    this.isLoading = true;

    this.authService
      .register(newUser)
      .pipe(
        map((user) => {
          this.saved = true;
        }),
        tap(() => {this.router.navigate(['/auth/login']); this.isLoading = false;})
      )
      .subscribe({
        error: (error) => {console.error(error); this.isLoading = false; this.error = error.error.message},
      });
  }

    validClasses(control: FormControl, validClass: string, errorClass: string) {
      return {
        [validClass]: control.touched && control.valid,
        [errorClass]: control.touched && control.invalid,
      };
    }

    matchEmail(c: AbstractControl): { [key: string]: any } | null {
      const email = c.get('emailControl')?.value;
      const email2 = c.get('repeatEmailControl')?.value;
      return email === email2 ? null : { match: true };
    }
}
