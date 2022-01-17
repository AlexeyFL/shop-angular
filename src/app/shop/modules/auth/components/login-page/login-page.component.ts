import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILoginUser } from 'src/app/shared/types/registerUser.interface';
import { AuthService } from 'src/app/shop/services/auth/auth.service';
import { loginAction } from '../../store/actions/auth.action';

import {
  isSubmittingSelector,
  getBackendErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  validForm!: boolean;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<string | null>;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues()
  }

  initializeForm() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.minLength],
    });
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(getBackendErrorsSelector));
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    const { login, password } = form.value;

    const request: ILoginUser = {
      login,
      password,
    };

    this.store.dispatch(loginAction({ request }));

    form.reset();
  }
}
