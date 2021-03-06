import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UserDataService } from 'src/app/shared/services/userData/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private router: Router,
    private auth: AuthService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  signIn() {
    if (this.form.status === 'VALID') {
      this.userDataService.setData({
        username: '',
        email: this.form.get('email')?.value,
        age: '',
      });
      this.auth.isValidForm = true;
      sessionStorage.setItem('user', 'valid');
      this.router.navigate(['/games']);
    }
  }
}
