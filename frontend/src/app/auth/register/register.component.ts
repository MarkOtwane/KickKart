import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.error = '';
      try {
        const { name, email, phone, password } = this.registerForm.value;
        console.log('Attempting registration:', {
          name,
          email,
          password,
        });
        const result = await this.authService.register({
          name,
          email,
          password,
        });
        console.log('Registration result:', result);
        this.authService.logout();
        this.router.navigate(['/auth/login'], {
          queryParams: { registered: 'true' },
        });
      } catch (error: any) {
        console.error('Registration error:', error);
        if (error.error?.message?.message) {
          this.error = error.error.message.message;
        } else if (error.error?.message) {
          this.error = error.error.message;
        } else if (error.message) {
          this.error = error.message;
        } else {
          this.error = 'Registration failed. Please try again.';
        }
        alert('Registration failed: ' + this.error);
      } finally {
        this.loading = false;
      }
    }
  }
}
